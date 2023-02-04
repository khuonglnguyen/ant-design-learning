import "../../App.css";
import { Alert, Button, Form, Input, message } from "antd";
import { useState } from 'react'

function Login() {
    const [alert, setAlert] = useState(false)
    const onFinish = () => {
        setAlert(true)
        message.success("Logged")
    }

    return (
        <div className="App">
            <header className="App-header">
                {alert && <Alert type="success" description="Logged"></Alert>}
                <Form onFinish={onFinish}>
                    <Form.Item label="Username" name="username" required>
                        <Input placeholder="Username"></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password" required>
                        <Input.Password></Input.Password>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </header>
        </div>
    );
}

export default Login;
