import React from 'react'
import { Row, Col } from 'antd'

import { Icon } from './icon'
import { Text } from './text'

export const Exit = () => {
  const styles = {
    div: {
      margin: '200px 50px',
      fontSize: '16px',
    },
  }
  return (
    <div style={styles.div}>
      <Row justify="start">
        <Col span={2} align="middle">
          <Icon />
        </Col>

        <Col span={10} align="middle" offset={0}>
          <Text text="Bыйти" />
        </Col>
      </Row>
    </div>
  )
}
