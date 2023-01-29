import "../../App.css";
import { Button, Form, Input } from "antd";

function Login() {
    const onFinish = () => {
        alert("Logged")
    }

    return (
        <div className="App">
            <header className="App-header">
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
