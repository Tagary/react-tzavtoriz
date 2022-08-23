import { Button, Form, Input } from 'antd';
import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';
import { useActions } from './../hooks/useActions';

const LoginForm: FC = () => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const submit = () => {
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Введите имя пользователя')]}>
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item label="Пароль" name="password" rules={[rules.required('Введите пароль')]}>
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
