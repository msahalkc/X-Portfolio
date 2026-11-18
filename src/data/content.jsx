// All page copy lives here so the components stay presentational.

export const site = {
  name: "Muhammed Sahal K C",
  short: "sahal kc",
  email: "hello@msahalkc.com",
  github: "https://github.com/msahalkc",
  linkedin: "https://www.linkedin.com/in/sahalkc/",
  medium: "https://msahalkc.medium.com/",
};

// Section anchors on the home page. Project pages link back with "/#id".
export const nav = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact", keep: true },
];

// Handwritten line in the hero, beside the featured project.
export const heroNote = "Problem → design → build → use it every day.";

export const products = [
  {
    id: "ab",
    slug: "asset-build",
    fastener: "tape",
    note: "Started as a gold tracker in October 2024. I've used it every day since.",
    scribble: "started as a gold tracker, Oct 2024",
    tilt: "-1.2deg",
    label: "Personal finance · live · free",
    name: "Asset Build",
    tagline: "Your money, one clear picture. Without handing it to anyone.",
    links: [{ href: "https://assetbuild.in", text: "assetbuild.in", accent: true }],
    shot: {
      src: "/projects/asset-build.webp",
      alt: "Asset Build homepage: a net worth of ₹25,62,556 split into gold, stocks, funds and other",
      caption: "assetbuild.in homepage · sample account",
    },
    why: "Every finance app I tried wanted to read my bank transactions, my SMS or my email. I didn't want to give that to anyone. So I built a tracker where I enter things myself, and the data stays mine. It began in October 2024 as a simple gold tracker, and I've used it every day since. Every feature after that came from something I needed.",
    what: "It starts as a simple cashflow tracker. When I'm ready, I switch on gold and investments, and they add up into one net worth in my own currency. Pots track chit funds and kuris, the way money actually moves at home.",
    listLabel: "Decisions",
    list: [
      <>Manual entry has to be fast, so a WhatsApp message like <code>240 food lunch</code> lands straight in Cashflow.</>,
      "No bank, SMS or email access. The one sync, Zerodha, is read-only, and its tokens are encrypted at rest.",
      "Google sign-in, so no passwords are stored. One tap blurs every amount.",
      "Everything is off by default. You turn on only what you use.",
    ],
    stack: "Next.js · TypeScript · PostgreSQL + Prisma · NextAuth · Capacitor for iOS and Android · Vercel",
  },
  {
    id: "ex",
    slug: "extend",
    fastener: "clip",
    note: "Sidecar, without putting my personal Apple Account on a work laptop.",
    scribble: "Sidecar, minus the shared Apple Account",
    tilt: "1deg",
    label: "macOS + iPadOS · open source · MIT",
    name: "ExtenD",
    tagline: "A second screen I already owned, without mixing work and personal accounts.",
    links: [
      { href: "https://extend.msahalkc.com", text: "extend.msahalkc.com", accent: true },
      { href: "https://github.com/msahalkc/ExtenD", text: "GitHub" },
    ],
    shot: {
      src: "/projects/extend.webp",
      alt: "ExtenD homepage: 'A second screen you already own' above a Mac and an iPad",
      caption: "extend.msahalkc.com homepage",
    },
    why: "My MacBook is for work and my iPad is personal. Using the iPad as a second screen should be easy, but Sidecar only works when both devices use the same Apple Account. I wasn't going to put my personal account on a work laptop, so I built my own, and I use it every day.",
    what: "It turns the iPad into a real second display for the Mac, at the iPad's own resolution. I pair the two once by comparing a code on both screens. USB-C gives the lowest latency, and Wi-Fi takes over when I unplug.",
    listLabel: "Hard parts",
    list: [
      "macOS has no public way to create a virtual display, so ExtenD uses an interface Apple doesn't publish. That's also why it can't be on the Mac App Store.",
      "macOS can't receive touches from another device, so I translate them into clicks, scrolls, drags and shortcuts. Apple Pencil keeps pressure and tilt.",
      "The link carries my screen and my input, so it's encrypted end to end with a Noise XX handshake I implemented on CryptoKit. It stays on the local network and ignores input while the Mac is locked.",
    ],
    stack: "Swift · SwiftUI · ScreenCaptureKit · VideoToolbox (H.264) · CryptoKit · Network · XcodeGen — Apple silicon Mac, macOS 15+, iPadOS 18+",
  },
  {
    id: "ad",
    featured: true,
    slug: "adahly",
    fastener: "binder",
    note: "No ads, no trackers, nothing to sell. Phone + watch.",
    scribble: "no ads, no trackers, phone + watch",
    tilt: "0.8deg",
    label: "Android + Wear OS · coming soon · free",
    name: "Adahly",
    tagline: "Prayer and Quran habits, without ads or anyone watching.",
    links: [{ href: "https://adahly.com", text: "adahly.com", accent: true }],
    shot: {
      src: "/projects/adahly.webp",
      alt: "Adahly homepage: 'Pray on time. Read every day. Keep the lantern lit.' beside a phone showing today's prayer times",
      caption: "adahly.com homepage",
    },
    why: "Many of the prayer apps on the Play Store were full of ads, and some tracked their users and sold that data. An app for something as personal as prayer shouldn't do either. So I built one with no ads, no trackers and nothing to sell.",
    what: "It works out accurate prayer times on the phone, sends prayer alerts, points to the qibla and carries the full Mushaf in Arabic, all offline. On a Wear OS watch, a tile and a complication show the next prayer, and I can mark prayers, count tasbih and find the qibla from my wrist. Gentle streaks help prayer and reading become a habit, and excused days pause a streak instead of breaking it. Every feature is free.",
    listLabel: "Decisions",
    list: [
      "Location never leaves the phone. Prayer times are calculated on the device, and no account is needed.",
      "Sync is optional and end-to-end encrypted on the phone, with the key kept in the user's Google backup. The server only holds data it can't read.",
      "No ads and no analytics SDKs. Crash reports are the only thing sent, and they carry no personal data.",
      "Streaks can't be bought. Supporting the app is optional and unlocks nothing.",
    ],
    stack: "Flutter · Dart · Riverpod · Drift (SQLite) · Supabase (Auth, Postgres with row-level security, Edge Functions) · Firebase Cloud Messaging · Kotlin + Jetpack Glance widgets · Wear OS in Kotlin + Compose (Tiles, complications)",
  },
  {
    id: "she",
    slug: "simple-header-editor",
    fastener: "tape",
    note: "About 12 KB, open source and fully local.",
    scribble: "12 KB, open source, fully local",
    tilt: "-0.9deg",
    label: "Chrome extension · open source · MIT",
    name: "Simple Header Editor",
    tagline: "Add an Authorization header in one click, with code anyone can read.",
    links: [
      {
        href: "https://chromewebstore.google.com/detail/simple-header-editor/hhncneonhepfjcjhbaomadiglhbjmmbf",
        text: "Chrome Web Store",
        accent: true,
      },
      { href: "https://github.com/msahalkc/simple-header-editor", text: "GitHub" },
    ],
    shot: {
      src: "/projects/simple-header-editor.webp",
      alt: "Simple Header Editor popup with Authorization and X-Api-Key headers, restricted to api.example.com",
      caption: "Chrome Web Store screenshot",
    },
    why: "I used a header extension every day at work. Then the Chrome Web Store removed it for carrying malicious code, and a tool that could see every request I made turned out not to be safe. I wanted one people can trust, so I wrote a small one and made it open source: anyone can read the code and check that it does only what it says.",
    what: "It adds custom request headers, like Authorization, to every site or only the domains I list. It comes with an empty Authorization header ready to paste into, a switch to turn everything off, and tokens masked by default.",
    listLabel: "Decisions",
    list: [
      <>Chrome applies the headers itself through <code>declarativeNetRequest</code>, so the extension never sees or touches the traffic.</>,
      "Settings stay in local browser storage. It makes no network requests of its own and has no analytics.",
      "The popup only saves settings. A background worker turns them into rules, so they keep working with the popup closed.",
      "It's about 12 KB, small enough to read in one sitting, and the README explains every permission it asks for.",
    ],
    stack: "JavaScript · Chrome Manifest V3 · declarativeNetRequest · chrome.storage — Chrome, Edge, Brave and other Chromium browsers",
  },
];

export const work = [
  {
    when: "2024",
    name: "Vista '24",
    desc: "Exhibition site for MES School of Architecture",
    links: [
      { href: "https://vistamessoa.netlify.app/", text: "Site" },
      { href: "https://github.com/msahalkc/vistamessoa", text: "Code" },
    ],
  },
  {
    when: "2023",
    name: "LaBelle '23",
    desc: "National-level tech fest website",
    links: [
      { href: "https://msahalkc.github.io/LaBelle/", text: "Site" },
      { href: "https://github.com/msahalkc/LaBelle", text: "Code" },
    ],
  },
  {
    when: "—",
    name: "KTU Result Viewer",
    badge: "Archived",
    desc: "Exam results for KTU students",
    links: [{ href: "https://github.com/msahalkc/KTU-Result-Viewer", text: "Code" }],
  },
];

export const experience = [
  { when: "2026 — now", role: "SDE 2", org: "FantaCode, Kozhikode", now: true },
  { when: "2024 — 2026", role: "Software Development Engineer", org: "FantaCode, Kozhikode" },
  { when: "2024", role: "React Developer Intern", org: "Tecnavis Web Solutions" },
  { when: "2023 — 2024", role: "Chief Technical Officer", org: "IEDC MESCE, Kuttippuram" },
  { when: "2023 — 2024", role: "Graphic Designer", org: "Applied Knowledge Sciences, remote" },
  { when: "2021 — 2024", role: "Freelance Graphic Designer", org: "Self-employed" },
];
