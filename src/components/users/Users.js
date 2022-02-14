import React from 'react'
import '../../App.css'

import { Layout } from 'antd'
import { SideBarMain } from './sideBar/SideBarMain'
import { HeaderMain } from './header/HeaderMain'
import UsersTable from '../usersTable/usersTable'

export default function Users() {
  const { Header, Sider, Content } = Layout
  return (
    <div className="user-wrapper">
      <h3 style={{ color: '#8A9597' }}>Все пользователи-студенты</h3>
      <Layout>
        <Sider
          style={{
            backgroundColor: '#00693E	',
            height: '835px',
            border: '4px solid #8B00FF',
          }}
          width="350"
        >
          <SideBarMain />
        </Sider>

        <Layout>
          <Header
            style={{
              height: '100px',
              backgroundColor: 'white',
            }}
          >
            <HeaderMain />
          </Header>

          <Content>
            <UsersTable />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
