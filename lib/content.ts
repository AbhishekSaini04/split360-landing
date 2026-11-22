/** Page copy. FAQ is also used for the FAQPage structured data, so keep answers plain text. */

export const features = [
  {
    slug: 'expense-tracker',
    title: 'Daily expense tracker',
    short: 'Log spending in seconds',
    body: 'Add an amount and a note. Split360 picks the category (food, fuel, bills, groceries, travel and more) and shows where your money went this month, day by day.',
  },
  {
    slug: 'split-bills',
    title: 'Split bills with friends',
    short: 'Equal, exact, % or shares',
    body: 'Groups for trips, flatmates, couples or office lunch. Split equally, by exact amounts, by percentage or by shares, even when more than one person paid.',
  },
  {
    slug: 'trip-pool',
    title: 'Trip pool (kitty)',
    short: 'Collect money up front',
    body: 'Everyone gives money to one person before the trip. Anyone can add more on the way. See collected, spent and what is left, and settle only the difference at the end.',
  },
  {
    slug: 'settle-up',
    title: 'Settle up over UPI',
    short: 'Fewest payments',
    body: 'Split360 works out the fewest payments to clear a group. Pay with any UPI app, record cash, and remind a friend on WhatsApp in one tap.',
  },
  {
    slug: 'voice',
    title: 'Add by voice',
    short: '"Expense 200 for lunch"',
    body: 'Say "Expense 200 for lunch, paid by UPI" and it is added, with the right category and date. Nothing is lost even if you close the app mid-sentence.',
  },
  {
    slug: 'private',
    title: 'Private by design',
    short: 'No ads, ever',
    body: 'Your personal expenses are visible only to you. No ads, no daily limits, no selling data. Delete your account and data any time from Settings.',
  },
] as const;

export const steps = [
  { title: 'Sign in with Google', body: 'One tap. No password to remember.' },
  { title: 'Add expenses or make a group', body: 'Log your own spending, or invite friends with a link on WhatsApp.' },
  { title: 'Settle up', body: 'See who owes whom and clear it over UPI with the fewest payments.' },
] as const;

export const faqs = [
  {
    q: 'Is Split360 free?',
    a: 'Yes. Split360 is free to use, with no ads and no daily limit on expenses.',
  },
  {
    q: 'How is Split360 different from Splitwise?',
    a: 'Split360 combines a personal expense tracker with group bill splitting, is built for India with UPI settle-up, has a trip pool to collect money up front, lets you add expenses by voice, and has no ads or daily limits.',
  },
  {
    q: 'What is the trip pool?',
    a: 'Before a trip, everyone gives money to one person who pays for things on the way. Split360 tracks what each person put in and what was spent, so at the end everyone only settles the difference.',
  },
  {
    q: 'Does Split360 move my money?',
    a: 'No. Split360 only records expenses and who owes whom. Payments happen in your own UPI app or in cash, and you mark them as settled in Split360.',
  },
  {
    q: 'Can my friends see my personal expenses?',
    a: 'No. Personal expenses are visible only to you. Group members see only the expenses added to that group.',
  },
  {
    q: 'Do my friends need the app to be in a group?',
    a: 'No. Add them by name and they appear in the group right away. When they open the invite link and sign in, they take over their spot with all past expenses.',
  },
  {
    q: 'Is there an Android app?',
    a: 'Split360 works in any phone browser and can be installed to the home screen. The Android app is coming to Google Play.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Open Settings in the app and choose Delete account. Your personal data is erased; shared group history stays balanced for the other members under the name "Deleted user".',
  },
] as const;
