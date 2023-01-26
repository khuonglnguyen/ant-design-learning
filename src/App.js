import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";

function App() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Button is clicked!");
    }, 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          type="primary"
          onClick={handleClick}
          loading={loading}
          icon={<PoweroffOutlined></PoweroffOutlined>}
        >
          My Button
        </Button>
      </header>
    </div>
  );
}

export default App;
