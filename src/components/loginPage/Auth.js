import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Row, Col } from 'antd'

import { Title } from './Title'

export default function Auth() {
  let navigate = useNavigate()

  const onFinish = (values) => {
    navigate('/Users')

    const url = 'https://jsonplaceholder.typicode.com/users'
    axios.post(url, {
      login: values.login,
      password: values.password
    })
    localStorage.setItem('values', JSON.stringify(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="login-page">
      <Title text="Вход в личный кабинет" />
      <Form
        // name="normal_login"
        name="basic"
        className="login-form"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col span={8} offset={8}>
            <label>Логин</label>
          </Col>
        </Row>
        <Form.Item
          name="login"
          wrapperCol={{ offset: 8, span: 8 }}
          rules={[{ required: true, message: 'Please input your Username (MIN-3, MAX-10 symbols!',min:3,max:10 }]}
        >
          <Input placeholder="login" />
        </Form.Item>
        <Row>
          <Col span={6} offset={8}>
            <label>Пароль</label>
          </Col>
          <Col>
            <label>Забыли пароль</label>
          </Col>
        </Row>
        <Form.Item
          name="password"
          wrapperCol={{ offset: 8, span: 8 }}
          rules={[{ required: true, message: 'Please input input your Password: MIN-5 symbols',min:5 }]}
        >
          <Input.Password type="password" placeholder="Password"  />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
