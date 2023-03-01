import "../../App.css";
import { Progress } from "antd";

function ProgressPage() {
    return (
        <div className="App">
            <header className="App-header">
              <Progress percent={10}></Progress>
              <Progress percent={10} type="circle"></Progress>
              <Progress percent={10} type="circle" status="success"></Progress>
              <Progress percent={10} type="circle" status="active"></Progress>
              <Progress percent={10} type="line" strokeColor={"red"}></Progress>
              <Progress percent={10} type="line" strokeColor={"red"} strokeWidth={3}></Progress>
            </header>
        </div>
    );
}

export default ProgressPage;
