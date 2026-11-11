// All page copy lives here so the components stay presentational.

export const site = {
  url: "https://msahalkc.com",
  name: "Muhammed Sahal K C",
  // Name forms the owner uses; "Sahal KC" is kept for search matching only.
  alternateNames: ["Sahal K C", "Sahal KC", "msahalkc", "sahal.kc"],
  short: "sahal kc",
  role: "Software Development Engineer 2",
  employer: { name: "FantaCode", url: "https://fantacode.com" },
  location: "Kozhikode, Kerala, India",
  school: {
    name: "MES College of Engineering, Kuttippuram",
    degree: "Bachelor of Computer Science and Engineering",
  },
  email: "msahalkc@gmail.com",
  github: "https://github.com/msahalkc",
  linkedin: "https://www.linkedin.com/in/sahalkc/",
  medium: "https://msahalkc.medium.com/",
  behance: "https://www.behance.net/msahalkc",
  description:
    "Muhammed Sahal K C (Sahal K C) is an SDE 2 at FantaCode in Kozhikode, Kerala. A designer turned software engineer building Asset Build and ExtenD.",
  knowsAbout: [
    "Full-stack development",
    "ASP.NET",
    "Angular",
    "React",
    "Next.js",
    "Swift",
    "UI/UX design",
    "Graphic design",
  ],
};

export const profiles = [
  { href: site.github, text: "GitHub" },
  { href: site.linkedin, text: "LinkedIn" },
  { href: site.medium, text: "Medium" },
  { href: site.behance, text: "Behance" },
];

export const nav = [
  { href: "#building", label: "Building" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#writing", label: "Writing" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact", keep: true },
];

export const products = [
  {
    id: "ab",
    slug: "asset-build",
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
    facts: [
      ["Role", "Designer and developer"],
      ["Status", "Live · free"],
      ["Started", "October 2024"],
      ["Platforms", "Web, Android, iOS (Capacitor)"],
    ],
    pageLinks: [{ href: "https://assetbuild.in", text: "Visit assetbuild.in", accent: true }],
    metaDescription:
      "Asset Build is a private personal-finance tracker by Muhammed Sahal K C: manual entry, no bank, SMS or email access, with gold, investments and chit funds in one net worth.",
    schema: { applicationCategory: "FinanceApplication", operatingSystem: "Web, Android, iOS", url: "https://assetbuild.in", free: true },
  },
  {
    id: "ex",
    slug: "extend",
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
    facts: [
      ["Role", "Designer and developer"],
      ["Status", "Open source · MIT"],
      ["Platforms", "macOS 15+ and iPadOS 18+"],
      ["Requires", "Apple silicon Mac"],
    ],
    pageLinks: [
      { href: "https://extend.msahalkc.com", text: "Visit extend.msahalkc.com", accent: true },
      { href: "https://github.com/msahalkc/ExtenD", text: "Source on GitHub" },
    ],
    metaDescription:
      "ExtenD by Muhammed Sahal K C turns an iPad into a second display for a Mac over USB-C or Wi-Fi, with touch and Apple Pencil, without a shared Apple Account. Free and open source.",
    schema: { applicationCategory: "UtilitiesApplication", operatingSystem: "macOS 15, iPadOS 18", url: "https://extend.msahalkc.com", free: true, license: "https://opensource.org/licenses/MIT", codeRepository: "https://github.com/msahalkc/ExtenD" },
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

export const route = [
  { label: "Grew up", place: "Kannur" },
  { label: "Studied", place: "Kuttippuram" },
  { label: "Works", place: "Kozhikode" },
];
