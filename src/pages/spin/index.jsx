import "../../App.css";
import { Button, Spin } from "antd";
import { useState } from "react";

function SpinPage() {
    const [loading, setLoading] = useState(true)
    return (
        <div className="App">
            <header className="App-header">
               <Spin spinning={loading}>
               </Spin>
                <Button onClick={()=>{
                    setLoading(pre => !pre)
                }}>Toggle Loading</Button>
            </header>
        </div>
    );
}

export default SpinPage;
