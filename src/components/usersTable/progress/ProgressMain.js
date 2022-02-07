import React from 'react'
import { Link } from 'react-router-dom'

import {Layout,Breadcrumb,Divider,Typography,Progress,Statistic,Row,Col,Timeline} from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import SideMenu from './SideMenu'


const { Header, Content, Sider } = Layout
const { Title } = Typography
export class ProgressMain extends React.Component {
  state = {
    collapsed: false
  }

  onCollapse = (collapsed) => {
    console.log(collapsed)
    this.setState({ collapsed })
  }
  render() {
    const { collapsed } = this.state
    return (
      <>
        <h1>Progress</h1>
        <Layout style={{ minHeight: '150vh' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={this.onCollapse}
            width="250"
          >
            <div className="logo" />
            <SideMenu />
            <Divider style={{ borderBottom: '2px solid white' }} />
            <Link style={{ margin: '40px 20px 20px' }} to="/Users">
              <LogoutOutlined style={{ color: 'lime', fontSize: '20px' }} />
            </Link>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0', fontSize: '20px' }}>
                <Breadcrumb.Item>Leanne Graham</Breadcrumb.Item>
              </Breadcrumb>
              <Divider />
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Title level={2}>Прогресс</Title>
                <div>
                  <Progress
                    style={{ fontSize: '18px' }}
                    trailColor="#DCDCDC"
                    type="line"
                    strokeWidth={12}
                    steps={64}
                    percent={64.29}
                    status="active"
                  />
                  <Divider />
                </div>
                <Row gutter={2}>
                  <Col offset={2} span={6}>
                    <Statistic title="Количество дней" value={12} />
                  </Col>
                  <Col offset={2} span={6}>
                    <Statistic title="Задачи" value={34 + '/' + 50} />
                  </Col>
                  <Col offset={2} span={6}>
                    <Statistic title="Чек-лист" value={3 + '/' + 5} />
                  </Col>
                </Row>
                <Divider />
                <Title level={2}>Шаги</Title>
                <div style={{ margin: '50px 50px 10px 800px' }}>
                  <Timeline mode="alternate">
                    <Timeline.Item color="green">Переменные</Timeline.Item>
                    <Timeline.Item color="green">Типы данных</Timeline.Item>

                    <Timeline.Item color="gray">Операторы</Timeline.Item>
                    <Timeline.Item color="gray">
                      Операторы сравнения
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      Условные операторы
                    </Timeline.Item>
                    <Timeline.Item color="gray">
                      Логические операторы
                    </Timeline.Item>
                    <Timeline.Item color="green">Цикл</Timeline.Item>
                    <Timeline.Item color="green">
                      Конструкция 'switch'
                    </Timeline.Item>
                    <Timeline.Item color="gray">Функции</Timeline.Item>
                  </Timeline>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    )
  }
}
