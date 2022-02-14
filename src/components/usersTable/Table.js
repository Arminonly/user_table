import React, { useState } from 'react'
import { Table, Tag, Space, Input, Modal } from 'antd'
import { users } from './data'
import { HeaderTitle } from './tableHeader/HeaderTitle'
import { Link } from 'react-router-dom'

export default function UserTable() {
  const dataSource = users.map((item) => ({ ...item, key: item.id }))
  const columns = [
    {
      title: 'Имя Фамилия',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      render: (user) => (
        <a href="https://web.telegram.org/k/" target="_blank">
          {user}
        </a>
      )
    },
    {
      title: 'Telegram',
      dataIndex: 'telegram',
      key: 'telegram'
    },
    {
      title: 'Instagram',
      dataIndex: 'instagram',
      key: 'instagram'
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login'
    },
    {
      title: 'Название модуля',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color =
              tag.length < 3
                ? '#FF1829'
                : tag.length < 5
                ? '#FFC618'
                : tag.length < 6
                ? '#18FF29'
                : '#7F1058'
            if (tag === 'Базы данных') {
              color = '#5118FF'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
      filters: [
        {
          text: 'HTML/CSS',
          value: 'HTML/CSS'
        },
        {
          text: 'Базы данных',
          value: 'Базы данных'
        },
        {
          text: 'JS',
          value: 'JS'
        },
        {
          text: 'Node',
          value: 'Node'
        },
        {
          text: 'React',
          value: 'React'
        }
      ],
      onFilter: (value, item) => item.tags.includes(value)
    },
    {
      title: 'Дата старта',
      dataIndex: 'startDate',
      key: 'startDate',
      sorter: (a, b) => a.startDate - b.startDate
    },
    {
      title: 'Действие',
      dataIndex: 'action',
      key: 'action',
      render: (text) => (
        <>
          <Space size="middle">
            <Link style={{ color: '#32CD32' }} to="/ProgressMain">
              Прогресс
            </Link>
            <span
              onClick={showModal}
              style={{ color: '#32CD32', cursor: 'pointer' }}
            >
              Изменить
            </span>
          </Space>
        </>
      )
    }
  ]
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

  return (
    <>
      <HeaderTitle />
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: '10',
          showSizeChanger: true,
          pageSizeOptions: [2, 5, 10, 15]
        }}
      />
      <p>
        <Modal
          title="внести изменения"
          centered
          okText="сохранить"
          cancelText="отменить"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder="измениете имя" style={{ marginBottom: 5 }} />
          <Input placeholder="измените login" />
        </Modal>
      </p>
    </>
  )
}
