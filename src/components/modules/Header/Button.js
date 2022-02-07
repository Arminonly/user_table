import React from 'react'

import { Modal, Button, Input } from 'antd'
import { CirclePicker } from 'react-color'

class _Button extends React.Component {
  state = {
    isModalVisible: false,
    background: '#fff'
  }
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex })
  }
  showModal = () => {
    this.setState({ isModalVisible: true })
  }
  handleOk = () => {
    this.setState({ isModalVisible: false })
  }
  handleCancel = () => {
    this.setState({ isModalVisible: false })
  }
  render() {
    return (
      <div>
        <Button
          ref={this.wrapper}
          onClick={this.showModal}
          size="large"
          style={{ marginLeft: '90px' }}
          type="primary"
        >
          Добавить модуль
        </Button>
        <Modal
          bodyStyle={{ height: '400px', fontSize: '18px' }}
          title="Добавить модуль"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText={'Готово'}
          cancelText={'Отмена'}
        >
          <label>Название:</label>
          <br />
          <br />
          <Input />
          <br />
          <br />
          <label>Цвет:</label>
          <br />
          <br />
          <CirclePicker
            color={this.state.background}
            onChangeComplete={this.handleChangeComplete}
          />
          <br />
        </Modal>
      </div>
    )
  }
}

export default _Button
