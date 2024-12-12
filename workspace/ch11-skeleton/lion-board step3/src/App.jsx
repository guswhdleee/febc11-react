import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { useTheme } from "styled-components";
import useThemeStore from "@zustand/themeStore";

function App() {
  const { isDarkMode } = useThemeStore();

  if (isDarkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
