import React, { Fragment } from 'react'
import { Row, Col, Badge } from 'antd'
import { BellFilled } from '@ant-design/icons'

import { Exit } from './exit/exit'
import { SideBarList } from './menu/SideBarList'
import { SidebarCollapse } from './SidebarCollapse'

export const SideBarMain = () => {
  return (
    <Fragment>
      <Row style={{ marginTop: '45px' }} justify="center">
        <Col span={2}>
          <h1
            style={{
              color: 'white',
              fontSize: '26px',
              borderRight: '3px solid white'
            }}
          >
            R
          </h1>
        </Col>
        <Col span={4}>
          <h1
            style={{
              color: 'white',
              fontSize: '18px',
              paddingTop: '7px',
              marginLeft: '15px'
            }}
          >
            REDEV
          </h1>
        </Col>
        <Col span={4} offset={2}>
          <Badge count={25} size='small' offset={[6, 14]}>
            <BellFilled
              style={{ color: 'white', fontSize: '22px', paddingTop: '10px' }}
            />
          </Badge>
        </Col>
      </Row>

      <SidebarCollapse />
      <SideBarList />
      <Exit />
    </Fragment>
  )
}
