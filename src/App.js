import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      <div className="bg-animation opacity-30 h-36 z-0 inset-0 fixed" />
      <div className="relative z-10">
        {/* 背景 */}
        <Header />
      </div>
    </>
  );
}

export default App;
