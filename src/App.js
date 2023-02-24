import "./App.css";
import Header from "./components/header";
import { useLocalStorageState } from "ahooks";

export const themeData = ["light", "dark", "blue", "red", "yellow"];

function App() {
  const [theme, setTheme] = useLocalStorageState("use-local-storage-theme", {
    defaultValue: themeData[0],
  });
  return (
    <div className={`bg-bg-main ${theme}`}>
      <div className="bg-animation opacity-30 h-36 z-0 inset-0 fixed" />
      <div className="relative z-10">
        {/* 背景 */}
        <Header themeProps={{ theme, setTheme }} />
      </div>
    </div>
  );
}

export default App;
