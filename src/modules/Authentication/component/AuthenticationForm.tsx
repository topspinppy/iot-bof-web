'use client'

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

type FormType = {
  email: string;
  username: string;
  password: string;
  remember?: boolean;
}

interface IAuthenticationFormProps {
  onFinishedForm(form: FormType): void;
}


function AuthenticationForm(props: IAuthenticationFormProps) {
  const { onFinishedForm } = props
  return (
    <div>
      <Form
        className="login-form lg:w-[10rem] sm:w-1/4 w-full"
        initialValues={{ remember: true }}
        onFinish={(ver: Form) => {
          onFinishedForm(ver)
        }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'กรุณากรอกชื่อผู้ใช้งาน!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'กรุณากรอกรหัสผ่าน!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>จดจำฉัน</Checkbox>
          </Form.Item>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button w-full">
            เข้าสู่ระบบ
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AuthenticationForm