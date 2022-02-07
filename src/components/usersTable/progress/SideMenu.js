import React from 'react'

import { Menu } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons'

const { SubMenu } = Menu

const SideMenu = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1" icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key="2" icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <SubMenu key="sub1" icon={<UserOutlined />} title="User">
        <Menu.Item key="3">Leanne Graham</Menu.Item>
        <Menu.Item key="4">Ervin Howell</Menu.Item>
        <Menu.Item key="5">Clementine Bauch</Menu.Item>
        <Menu.Item key="6">Patricia Lebsack</Menu.Item>
        <Menu.Item key="7">Chelsey Dietrich</Menu.Item>
        <Menu.Item key="8">Dennis Schulist</Menu.Item>
        <Menu.Item key="9">Kurtis Weissnat</Menu.Item>
        <Menu.Item key="10">Nicholas Runolfsdottir V</Menu.Item>
        <Menu.Item key="11">Glenna Reichert</Menu.Item>
        <Menu.Item key="12">Clementina DuBuque</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
        <Menu.Item key="13">Team 1</Menu.Item>
        <Menu.Item key="14">Team 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="15" icon={<FileOutlined />}>
        Files
      </Menu.Item>
    </Menu>
  )
}

export default SideMenu
