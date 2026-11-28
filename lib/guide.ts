/** "How to use Split360": one section per task, in the order a new user needs them. Plain text only. */
export interface GuideSection { id: string; title: string; intro: string; steps: string[]; tip?: string; screen?: string; alt?: string }

export const guide: GuideSection[] = [
  {
    id: 'install', title: 'Get started and install the app',
    intro: 'Split360 runs in your phone browser and installs like an app. No Play Store needed.',
    steps: [
      'Open split360app.indiesoft.in in Chrome (Android) or Safari (iPhone).',
      'Tap Continue with Google.',
      'Android: tap Install app when the popup comes (or Settings → Install). iPhone: tap Share, then Add to Home Screen.',
      'Tap Turn on when asked for notifications, so reminders and friends\' updates reach you.',
    ],
    tip: 'Once installed it opens instantly with your last data, even without internet.',
    screen: '/screens/home.webp', alt: 'Split360 home screen',
  },
  {
    id: 'settings', title: 'Set up your profile',
    intro: 'Three things make everything else smoother. Open Settings (tap your photo).',
    steps: [
      'UPI ID (like name@okaxis): friends can pay you in one tap, and you can make payment QR codes.',
      'Mobile number: people in your groups can WhatsApp you reminders and QR codes. Your own number always wins over one a friend typed in.',
      'Language: English or हिंदी. The whole app switches.',
    ],
    screen: '/screens/hindi.webp', alt: 'The app in Hindi',
  },
  {
    id: 'adding-expenses', title: 'Add your own expenses',
    intro: 'Your personal spending: chai, petrol, recharge, shopping. Only you can see it.',
    steps: [
      'Tap the green + at the bottom, choose Just me, enter the amount and a note. The category is picked for you.',
      'Or tap the mic and say it (see the voice section below).',
      'Open My spending to see the month\'s total, week by week (later month by month), and each category up or down against last month.',
      'Tap any entry to edit or delete it.',
    ],
    screen: '/screens/chart.webp', alt: 'My spending with the weekly chart',
  },
  {
    id: 'voice', title: 'Speak to add, or ask',
    intro: 'Tap the black mic button on any page and talk the way you normally do. Hindi words and Hinglish are fine.',
    steps: [
      'Spending: "Expense 200 lunch", "Expense 20 chai, 30 milk yesterday, 50 petrol" (three entries at once).',
      'Reminder: "Remind me doodh lana hai shaam 6 baje", "Remind me rent 10 December 9 am".',
      'Udhaar: "Rahul ko 500 udhaar diye", "Rahul se 200 udhaar liye".',
      'Into a group: on the group\'s page say "1200 dinner", or from anywhere "Expense Goa Trip group 1200 dinner". It is split equally, paid by you.',
      'Questions: "Is mahine chai pe kitna gaya?", "Pichle hafte petrol kitna?", "Aaj kitna kharcha hua?"',
    ],
    tip: 'Offline: on phones that support it, the mic still works and the entry is added when you are back online. If not, the app says so and you can type it or add it by hand.',
    screen: '/screens/voice.webp', alt: 'Voice panel showing an answer',
  },
  {
    id: 'groups', title: 'Groups and friends',
    intro: 'A group is for a trip, a flat, an office lunch. A friend is a one-to-one account with someone.',
    steps: [
      'Groups → New group: give it a name and type, and add people by name (mobile number optional). They don\'t need the app yet.',
      'Tap the link button on the group to send the invite on WhatsApp. When they open it and sign in, they pick their name and see everything.',
      'Groups → Add friend for one-to-one splitting.',
      'Admins can fix the name with the pencil next to it. The group with the latest activity is always on top.',
      'Trip over and everyone settled? Tap the archive button. It moves to Archived and comes back by itself if anything new happens.',
    ],
    screen: '/screens/groups.webp', alt: 'Groups and friends list',
  },
  {
    id: 'splitting', title: 'Split a bill',
    intro: 'In a group tap Add expense, enter the amount and what it was for, then choose who paid and how to split.',
    steps: [
      'Equally: tick who was in.',
      'Exact: type each person\'s amount. Percent: each person\'s %. Shares: e.g. Rahul 2, others 1.',
      'Items: add each item and tap who had it (pizza for 3, drinks for 2). Tax or tip on top is shared in the same proportion.',
      'More than one person paid? Tap "+ More than one person paid" and enter what each paid.',
    ],
    screen: '/screens/items.webp', alt: 'Item-wise split',
  },
  {
    id: 'trips', title: 'Trip pool and trip summary',
    intro: 'Collect money before the trip so one person can pay on the way.',
    steps: [
      'In the group tap Start a pool and pick who keeps the money. Everyone adds what they gave, by cash or UPI, any time.',
      'Expenses that person pays come out of the pool. At the end everyone settles only the difference.',
      'Tap the chart button at the top of the group for the trip summary: total, days, who paid, each share and top categories. Share it as an image.',
    ],
    screen: '/screens/summary.webp', alt: 'Trip summary',
  },
  {
    id: 'udhaar', title: 'Udhaar (lend or borrow)',
    intro: 'Money given or taken without a shared bill.',
    steps: [
      'Open the friend (Groups → Friends) and tap Udhaar.',
      'Choose "I gave …" or "… gave me", enter the amount and a note, and save.',
      'Or just say "Rahul ko 500 udhaar diye" to the mic. If Rahul is not your friend yet, he is added.',
    ],
    tip: 'Udhaar shows in your balance with that friend but is not counted as your spending.',
    screen: '/screens/udhaar.webp', alt: 'Udhaar form',
  },
  {
    id: 'settle-up', title: 'Settle up: UPI, cash or QR',
    intro: 'Settle up shows everyone you owe and everyone who owes you, across all groups, in the fewest payments.',
    steps: [
      'You owe someone: tap Pay. It opens your UPI app with the amount filled. After paying, tap Mark as paid. Paid in cash? Tap Paid in cash.',
      'Someone owes you: tap the bell to send a friendly WhatsApp reminder with a one-tap pay link.',
      'Get paid by QR: tap it (or the QR icon next to a friend), enter the amount, and show the QR or send it on WhatsApp. Money goes straight to your UPI ID.',
      'When they pay you, tap Record so the balance clears.',
    ],
    tip: 'Save a friend\'s mobile number and reminders, QR codes and pay links open straight in their WhatsApp chat.',
    screen: '/screens/qr.webp', alt: 'Get paid by QR',
  },
  {
    id: 'friends', title: 'WhatsApp a friend directly',
    intro: 'Add a mobile number once and stop searching for chats.',
    steps: [
      'When adding a friend or a group member, type their mobile number (optional).',
      'Already added? Open the group → Members and tap the phone icon next to them. On a friend\'s page, tap the phone icon at the top.',
      'If they save their own number in their profile, theirs replaces yours automatically.',
    ],
    screen: '/screens/balances.webp', alt: 'Who pays whom with reminder buttons',
  },
  {
    id: 'reminders', title: 'Reminders',
    intro: 'Tap the bell at the top (or Reminders & alerts).',
    steps: [
      'Type or say it: "call Rahul at 6 pm", "kal subah 9 baje gas", "rent 10 December 9 am", "friday ko movie tickets".',
      'Or tap + New reminder: pick Today, Tomorrow, In a week or any date and time, or Every 15 min.',
      'When it rings, tap Work done or Remind me in 10 min right on the notification.',
      'Without a time it repeats every 15 minutes until done, pausing from 10 pm to 8 am.',
    ],
    screen: '/screens/reminders.webp', alt: 'Reminders page',
  },
  {
    id: 'notifications', title: 'Notifications you will get',
    intro: 'Only the useful ones.',
    steps: [
      'A friend adds, edits or deletes an expense with your share, pays you, or joins your group. These also stay in the bell list until you read them, and wait up to a week if your phone is offline.',
      'Every evening at 9 pm: what you spent today.',
      'A gentle nudge if you have owed money in a group for a week.',
      'Friendly hourly reminders during the day to log your spending (skipped if you just added something).',
    ],
  },
];

/** Everything the mic understands, for the cheat sheet. */
export const voiceExamples: [string, string][] = [
  ['Expense 200 lunch', 'Adds ₹200, category Food'],
  ['Expense 20 chai, 30 milk yesterday, 50 petrol', 'Three entries; yesterday applies to milk and petrol'],
  ['Expense 450 petrol by cash', 'Payment mode cash'],
  ['Expense two ten rupees', '₹210'],
  ['Remind me call Rahul at 6 pm', 'Reminder today 6 pm'],
  ['Remind me rent 10 December 9 am', 'Reminder on a future date'],
  ['Remind me gas band karni hai', 'Every 15 minutes until done'],
  ['Rahul ko 500 udhaar diye', 'Udhaar: Rahul owes you ₹500'],
  ['Rahul se 200 udhaar liye', 'Udhaar: you owe Rahul ₹200'],
  ['Expense Goa Trip group 1200 dinner', 'Into the group, split equally, paid by you'],
  ['Is mahine chai pe kitna gaya?', 'Answer: this month on chai'],
  ['Pichle hafte petrol kitna?', 'Answer: last week on petrol'],
];
