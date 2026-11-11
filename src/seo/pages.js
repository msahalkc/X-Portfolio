// Every page the build pre-renders. `file` is what Netlify serves:
// /asset-build is answered by asset-build.html, unknown paths by 404.html (with a 404 status).
export const pages = {
  home: {
    path: "/",
    file: "index.html",
    title: "Muhammed Sahal K C · Software Engineer at FantaCode",
    description:
      "Muhammed Sahal K C (Sahal K C, msahalkc) is an SDE 2 at FantaCode in Kozhikode, Kerala. A designer turned software engineer building Asset Build and ExtenD.",
  },
  "asset-build": {
    path: "/asset-build",
    file: "asset-build.html",
    title: "Asset Build · a private finance tracker by Muhammed Sahal K C",
  },
  extend: {
    path: "/extend",
    file: "extend.html",
    title: "ExtenD · iPad as a second Mac display, by Muhammed Sahal K C",
  },
  notFound: {
    path: null,
    file: "404.html",
    title: "Page not found · Muhammed Sahal K C",
    description: "This page doesn't exist. Everything by Muhammed Sahal K C is on the home page.",
    noindex: true,
  },
};

export const pageFromPath = (pathname) => {
  const clean = pathname.replace(/\/+$/, "").replace(/\.html$/, "") || "/";
  const match = Object.entries(pages).find(([, page]) => page.path === clean);
  return match ? match[0] : "notFound";
};
