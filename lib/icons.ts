import { ArrowLeftRight, BellRing, HandCoins, Languages, MessageCircle, Mic, PiggyBank, ReceiptText, ShieldCheck, Users, WifiOff, AlarmClock } from 'lucide-react';

export const ICONS = {
  'expense-tracker': ReceiptText,
  voice: Mic,
  'split-bills': Users,
  'settle-up': ArrowLeftRight,
  'trip-pool': PiggyBank,
  udhaar: HandCoins,
  reminders: AlarmClock,
  whatsapp: MessageCircle,
  alerts: BellRing,
  hindi: Languages,
  offline: WifiOff,
  private: ShieldCheck,
} as const;
