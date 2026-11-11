// index.html applies the saved theme before first paint; this only flips it.
const currentTheme = () =>
  document.documentElement.getAttribute("data-theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

const ThemeToggle = () => {
  const toggle = () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  };

  return (
    <button className="theme" type="button" onClick={toggle} aria-label="Switch colour theme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
};

export default ThemeToggle;
