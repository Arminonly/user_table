import { useNavigate } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'
import IndexHeader from './Header/indexHeader'
import ContentMain from './Content/ContentMain'

const { Header, Content } = Layout
const ModulesMain = () => {
  const styles = {
    Header: {
      height: '100px',
      backgroundColor: 'inherit'
    },
    Content: {
      height: '70vh',
      backgroundColor: 'inherit'
    }
  }

  let navigate = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate('/Users')}
        style={{ backgroundColor: 'lime', cursor: 'pointer' }}
      >
        НАЗАД
      </button>
      <Row>
        <Col style={{ height: '100vh' }} span={20} offset={2}>
          <Layout>
            <Header style={styles.Header}>
              <IndexHeader />
            </Header>
            <Content style={styles.Content}>
              <ContentMain />
            </Content>
          </Layout>
        </Col>
      </Row>
      {/*  */}
    </div>
  )
}

export default ModulesMain
