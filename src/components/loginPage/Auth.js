import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Form, Input, Button, Row, Col } from 'antd'
import { Title } from './Title'

export default function Auth() {
  let navigate = useNavigate()

  const onFinish = (values: any) => {
    navigate('/Users')
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="login-page">
      <Title text="Вход в личный кабинет" />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          wrapperCol={{ offset: 8, span: 8 }}
          rules={[{ required: true, message: 'Please input your login!' }]}
        >
          <label>Логин</label>
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 8, span: 8 }}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Row>
            <Col span={8}>
              <label>Пароль</label>
            </Col>
            <Col span={8} offset={8}>
              <label>Забыли пароль</label>
            </Col>
          </Row>

          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>

          <Button type="primary" htmlType="submit" block>
            Войти
          </Button>
    
        </Form.Item>
      </Form>
    </div>
  )
}
