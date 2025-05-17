import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ onClick }: { onClick?: () => void }) {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} className="px-3 py-1 border rounded">
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
