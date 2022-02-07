import { Row, Col } from 'antd'
import _Button from './Button'
import _Title from './Title'

const IndexHeader = () => {
  return (
    <div>
      <Row justify="space-between">
        <Col span={4} style={{ marginTop: '15px' }}>
          <_Title />
        </Col>
        <Col
          span={4}
          style={{ marginTop: '15px' }}
          // offset={8}
        >
          <_Button />
        </Col>
      </Row>
    </div>
  )
}
export default IndexHeader
