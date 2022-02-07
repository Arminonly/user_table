import React from 'react'


import {Typography, Space } from 'antd'
export const HeaderText = ()=> {
  const { Title } = Typography

    return(
        <Space>
          <Title   style={{marginTop:'30px'}} strong="true" level={4}>
            Таблица пользователей
          </Title>
        </Space>
    )
}