import React from 'react'
import { Row, Col} from 'antd'
import { HeaderText } from './HeaderText'
import  HeaderButton  from './HeaderButton'
import { HeaderInput } from './HeaderInput'

export const HeaderTitle = () => {
  return (
<>

 <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
     <HeaderText />
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 1 }}>
       <HeaderButton />
    </Col>
    <Col xs={{ span: 5, offset:1 }} lg={{ span: 6, offset: 1 }}>
       <HeaderInput />
    </Col>
  </Row>,

   
</>
  )
}
