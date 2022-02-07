import React from 'react'
import { Collapse } from 'antd'

export const SidebarCollapse = () => {
  
  const { Panel } = Collapse
  //   function callback(key) {
  //     console.log(key)
  //   }
  const text1 = 'Динамика студентов'
  const text2 = 'Рейтинг благодарности'
  return (
    <Collapse
      style={{
        marginTop:'30px',
        backgroundColor: 'inherit',
        marginLeft: '30px',
        fontSize: '18px',
      }}
      ghost={true}
      expandIconPosition="right"
      defaultActiveKey={['0']}
      //  onChange={callback}
    >
      <Panel  header="Все пользователи" key="1" style={{ cursor: 'pointer', }}>
        <p style={{color:'#8A9597',marginLeft:'50px'}}>{text1}</p>
        <p style={{color:'#8A9597',marginLeft:'50px'}}>{text2}</p>
      </Panel>
    </Collapse>
  )
}


