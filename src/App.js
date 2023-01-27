import logo from "./logo.svg";
import "./App.css";
import { Button, Input } from "antd";
import { useState } from "react";
import { PoweroffOutlined, UserOutlined, UserAddOutlined } from "@ant-design/icons";

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
        <Input placeholder="Username..." maxLength={20} prefix={<UserOutlined></UserOutlined>} allowClear></Input>
        <Input.Search placeholder="Search..." maxLength={20} prefix={<UserAddOutlined></UserAddOutlined>} allowClear></Input.Search>
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
