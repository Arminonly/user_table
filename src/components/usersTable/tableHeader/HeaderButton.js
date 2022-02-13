import React, { useState } from 'react'
import { Modal, Button, Input, Select } from 'antd'

export default function HeaderButton() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }
  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const { Option } = Select
  function handleChange(value) {
    console.log(`selected ${value}`)
  }
  return (
    <>
      <Button onClick={showModal} style={{ marginTop: '30px' }} type="primary">
        Добавить студента
      </Button>

      <Modal
        cancelText="отмена"
        okText="готово"
        title="Добавить студента"
        width={520}
        bodyStyle={{ height: '400px', fontSize: '18px' }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <label>Имя Фамилия</label>
        <Input style={{ fontSize: '18px' }} />
        <label>Telegram</label>
        <Input style={{ fontSize: '18px' }} />
        <label>Instagram</label>
        <Input style={{ fontSize: '18px' }} />
        <label>Mail:</label>
        <Input style={{ fontSize: '18px' }} />
        <label>Модуль</label>
        <br />
        <Select
          defaultValue="HTML/CSS"
          style={{ fontSize: '18px', width: 470 }}
          onChange={handleChange}
        >
          <Option value="React">React</Option>
          <Option value="JS">JS</Option>
          <Option value="HTML/CSS">HTML/CSS</Option>
          <Option value="Node">Node</Option>
        </Select>
      </Modal>
    </>
  )
}
