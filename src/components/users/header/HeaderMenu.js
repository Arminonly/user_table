import React from 'react'
import { Tabs } from 'antd'

export const HeaderMenu = () => {
  const { TabPane } = Tabs

  function callback(key) {
    console.log(key)
  }
  return (
    <Tabs defaultActiveKey="1" onChange={callback} style={{fontSize:'18', color:'#8A9597'}}>
      <TabPane tab="Студенты" key="1"></TabPane>
      <TabPane tab="Динамика студентов" key="2"></TabPane>
      <TabPane tab="Рейтинг благодарности" key="3"></TabPane>
    </Tabs>
  )
}

