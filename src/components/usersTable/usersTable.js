import React from 'react'
import { Row, Col } from 'antd'
import  UserTable  from './Table'

export default function UsersTable() {
  return (
    <div>
      <Row>
      
        <Col xs={24} md={{ span: 20, offset: 2 }}>
          <UserTable />
        </Col>
      </Row>
    </div>
  )
}
