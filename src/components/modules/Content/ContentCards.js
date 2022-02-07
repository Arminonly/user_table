import React from 'react'
import { Card, Col, Row, Badge } from 'antd'
import { EditOutlined, CloseOutlined } from '@ant-design/icons'

const ContentCards = () => {
  const styles = {
    div: {
      margin: '100px 5px 15px 280px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }
  return (
    <>
      <div className="site-card-wrapper" style={{ margin: '15px' }}>
        <Row gutter={[10, 15]}>
          <Col span={6}>
            <Badge.Ribbon text="Hippies"  color='#C1876B'>
              <Card title="HTML/CSS" size="default" hoverable={true}  >
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col span={6}>
            <Badge.Ribbon text="Hippies" color='#CDA4DE'>
              <Card title="JS" size="default"  hoverable={true}>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col span={6}>
            <Badge.Ribbon text="Hippies" color='#87CEEB'>
              <Card title="REACT" size="default"  hoverable={true}>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col span={6}>
            <Badge.Ribbon text="Hippies" color='#9ACD32'>
              <Card title="Node" size="default"  hoverable={true}>
                <div style={styles.div}>
                  <EditOutlined /> &nbsp;&nbsp;
                  <CloseOutlined />
                </div>
              </Card>
            </Badge.Ribbon>
          </Col>
          <Col span={6}>
            <Badge.Ribbon  text="Hippies" color='#D6AE01'>
              <Card title="Базы данных" color='black' size="default"  hoverable={true}>
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
