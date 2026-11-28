/** Page copy. FAQ is also used for the FAQPage structured data, so keep answers plain text. */

export const features = [
  {
    slug: 'expense-tracker',
    title: 'Daily expense tracker',
    short: 'Log spending in seconds',
    body: 'Add an amount and a note. Split360 picks the category and shows where your money went: this month, week by week, month by month, and up or down against last month for every category.',
  },
  {
    slug: 'voice',
    title: 'Speak to add, or ask',
    short: '"Expense 20 chai, 50 doodh"',
    body: 'Say several expenses in one sentence, add udhaar or a reminder, put a bill into a group, or ask "is mahine chai pe kitna gaya?" and get the answer. Works offline on phones that support it.',
  },
  {
    slug: 'split-bills',
    title: 'Split bills with friends',
    short: 'Equal, exact, %, shares or items',
    body: 'Groups for trips, flatmates, couples or office lunch. Split equally, by amounts, percent, shares, or item by item (pizza for 3, drinks for 2), even when more than one person paid.',
  },
  {
    slug: 'settle-up',
    title: 'Settle up over UPI or QR',
    short: 'Fewest payments',
    body: 'Split360 works out the fewest payments to clear a group. Pay with any UPI app, record cash, or make a QR with the amount for your friend to scan, and send it on WhatsApp.',
  },
  {
    slug: 'trip-pool',
    title: 'Trip pool (kitty) and summary',
    short: 'Collect money up front',
    body: 'Everyone gives money to one person before the trip and settles only the difference at the end. After the trip, share a summary card: total, who paid what, top categories.',
  },
  {
    slug: 'udhaar',
    title: 'Udhaar',
    short: '"Rahul ko 500 udhaar diye"',
    body: 'Money you gave a friend or took from one, without making a group. It shows in your balance with them, and it is not counted as spending.',
  },
  {
    slug: 'reminders',
    title: 'Reminders that ring',
    short: '"Remind me rent 10 Dec 9 am"',
    body: 'Set a reminder by voice or by hand, for today or any day ahead. It rings on time with Work done and 10 min later buttons, or every 15 minutes until done.',
  },
  {
    slug: 'whatsapp',
    title: 'Straight to their WhatsApp',
    short: 'Save a friend\'s mobile',
    body: 'Add a friend\'s mobile number once. Payment reminders, QR codes and messages then open directly in their WhatsApp chat. If they add their own number, theirs is used.',
  },
  {
    slug: 'alerts',
    title: 'Notifications that matter',
    short: 'Nothing missed',
    body: 'Know when a friend adds, edits or deletes an expense or pays you, even if your phone was offline. A 9 pm summary of your day, and a gentle nudge when money has been pending for a week.',
  },
  {
    slug: 'hindi',
    title: 'Hindi or English',
    short: 'Your language',
    body: 'Switch the whole app between English and Hindi from Settings. Voice understands Hinglish: "kal", "parso", "shaam 6 baje", "udhaar".',
  },
  {
    slug: 'offline',
    title: 'Works on slow or no internet',
    short: 'Install in one tap',
    body: 'Install Split360 to your home screen. It opens instantly with your last data, and anything you add offline syncs when the internet is back.',
  },
  {
    slug: 'private',
    title: 'Private by design',
    short: 'No ads, ever',
    body: 'Your personal expenses are visible only to you. No ads, no daily limits, no selling data. Archive finished trips to keep your list clean.',
  },
] as const;

export const steps = [
  { title: 'Sign in with Google', body: 'One tap. No password to remember. Install it to your home screen when asked.' },
  { title: 'Add expenses or make a group', body: 'Tap + or the mic. Log your own spending, or make a group and invite friends with a link on WhatsApp.' },
  { title: 'Settle up', body: 'See who owes whom and clear it over UPI or a QR, with the fewest payments.' },
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
    q: 'How do I install Split360 on my phone?',
    a: 'Open split360app.indiesoft.in in Chrome and tap Install app when asked (or Settings, Install). On iPhone, open it in Safari, tap Share, then Add to Home Screen. It then opens like an app and works offline.',
  },
  {
    q: 'What can I say to the mic?',
    a: 'Start with "Expense" for spending ("Expense 20 chai, 50 doodh yesterday"), "Remind me" for reminders, "Rahul ko 500 udhaar diye" for udhaar, and ask questions like "is mahine chai pe kitna gaya". On a group page, just say "1200 dinner" to split it equally. The full list is in the guide.',
  },
  {
    q: 'How do I get paid with a QR code?',
    a: 'Add your UPI ID in Settings. Then on Settle up, tap Get paid by QR (or the QR icon next to a friend), enter the amount, and show the QR or send it on WhatsApp. The money goes straight to your UPI ID.',
  },
  {
    q: 'Is the app available in Hindi?',
    a: 'Yes. Open Settings and choose हिंदी under Language. You can switch back to English any time.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. Once installed it opens with your last data, and expenses you add offline sync when you are back online. Voice works offline on phones whose browser can download the speech pack; otherwise type it or add it by hand.',
  },
  {
    q: 'How do I delete my account?',
    a: 'Use Account deletion request at the bottom of Settings, or write to support.indiesoft@gmail.com from the email or phone you signed in with. We erase your personal data within 7 days; shared group history stays balanced for the other members under the name "Deleted user".',
  },
] as const;
