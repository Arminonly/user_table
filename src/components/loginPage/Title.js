import React from 'react'
import { Row, Col } from 'antd'

export const Title = ({ text }) => {
  const styles = {
    div: {
      margin: '200px 10px 25px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '24px',
    },
  }
  return (
    <div style={styles.div}>
      <Row>
        <Col span={24}>{text}</Col>
      </Row>
    </div>
  )
}
