import { ArrowLeftRight, Mic, PiggyBank, ReceiptText, ShieldCheck, Users } from 'lucide-react';

export const ICONS = {
  'expense-tracker': ReceiptText,
  'split-bills': Users,
  'trip-pool': PiggyBank,
  'settle-up': ArrowLeftRight,
  voice: Mic,
  private: ShieldCheck,
} as const;
