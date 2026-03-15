import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import * as nodemailer from 'nodemailer';
import { EMAIL_QUEUE } from '../services/auth.service';
import { AppConfigService } from '@src/config/app.config';

interface WelcomeJobData {
  userId: string;
  email: string;
  name: string;
}

interface PasswordResetJobData {
  userId: string;
  email: string;
  name: string;
  resetToken: string;
}

@Processor(EMAIL_QUEUE)
export class EmailProcessor {
  private readonly logger = new Logger(EmailProcessor.name);
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly config: AppConfigService) {
    const smtp = config.smtp;
    this.transporter = nodemailer.createTransport({
      host: smtp.host,
      port: smtp.port,
      secure: smtp.secure,
      auth: smtp.user ? { user: smtp.user, pass: smtp.pass } : undefined,
    });
  }

  @Process('welcome')
  async handleWelcome(job: Job<WelcomeJobData>): Promise<void> {
    const { email, name } = job.data;
    const { fromName, fromEmail } = this.config.smtp;

    try {
      await this.transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        subject: `Welcome to Nexus, ${name}! 👋`,
        html: this.welcomeTemplate(name),
      });
      this.logger.log(`Welcome email sent to ${email}`);
    } catch (err) {
      this.logger.error(`Failed to send welcome email to ${email}`, err);
      throw err; // BullMQ will retry
    }
  }

  @Process('password-reset')
  async handlePasswordReset(job: Job<PasswordResetJobData>): Promise<void> {
    const { email, name, resetToken } = job.data;
    const { fromName, fromEmail } = this.config.smtp;
    const resetUrl = `${this.config.appUrl}/auth/reset-password?token=${resetToken}`;

    try {
      await this.transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to: email,
        subject: 'Reset your Nexus password',
        html: this.resetPasswordTemplate(name, resetUrl),
      });
      this.logger.log(`Password reset email sent to ${email}`);
    } catch (err) {
      this.logger.error(`Failed to send reset email to ${email}`, err);
      throw err;
    }
  }

  // ── Email Templates ──────────────────────────────────────────────────────

  private welcomeTemplate(name: string): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #4F46E5;">Welcome to Nexus, ${name}! 👋</h1>
        <p>We're thrilled to have you join our community.</p>
        <p>Head back to the app to start chatting in rooms and connecting with others.</p>
        <p style="color: #6B7280; font-size: 12px;">If you didn't create this account, please ignore this email.</p>
      </div>
    `;
  }

  private resetPasswordTemplate(name: string, resetUrl: string): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #4F46E5;">Reset your password</h1>
        <p>Hi ${name},</p>
        <p>We received a request to reset your Nexus password. Click the button below to create a new password.</p>
        <a href="${resetUrl}" style="
          display: inline-block;
          background: #4F46E5;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          margin: 16px 0;
        ">Reset Password</a>
        <p style="color: #6B7280; font-size: 12px;">This link expires in 1 hour. If you didn't request this, you can safely ignore this email.</p>
      </div>
    `;
  }
}
