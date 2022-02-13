import React from 'react'
import { Card, Col, Row, Badge, Input } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons'

const ContentCards = () => {
  const styles = {
    div: {
      margin: '100px 5px 15px 280px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }
  // const text = '!!!!test text!!!!'
  // const title = '!!!!test title!!!!'
  // color='#C1876B'
  const color = '#C1876B'

  return (
    <>
      <div className="site-card-wrapper" style={{ margin: '15px' }}>
        <Row gutter={[10, 15]}>
          <Col span={6}>
            <Badge.Ribbon text='HTML/CSS' color={color}>
              <Card title='HTML/CSS' size="default" hoverable={true}>
              <Input/>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col span={6}>
            <Badge.Ribbon text="JS" color="#CDA4DE">
              <Card title="JS" size="default" hoverable={true}>
              <Input/>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col span={6}>
            <Badge.Ribbon text="REACT" color="#87CEEB">
              <Card title="REACT" size="default" hoverable={true}>
              <Input/>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col span={6}>
            <Badge.Ribbon text="Node" color="#9ACD32">
              <Card title="Node" size="default" hoverable={true}>
              <Input/>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>

          <Col span={6}>
            <Badge.Ribbon text="Базы данных" color="#D6AE01">
              <Card
                title="Базы данных"
                color="black"
                size="default"
                hoverable={true}
              >
              <Input/>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default ContentCards
