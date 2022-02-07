import React from 'react'
import { Table, Tag, Space } from 'antd'
import { users } from './data'
import { HeaderTitle } from './tableHeader/HeaderTitle'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Имя Фамилия',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <a href="https://web.telegram.org/k/" target="_blank">
        {text}
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
        {tags.map((tag) => (
          <Tag color="geekblue" key={tag}>
            {tag}
          </Tag>
        ))}
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
      <Space size="middle">
        <Link to="/ProgressMain">Прогресс</Link>
        <a>Изменить </a>
      </Space>
    )
  }
]

export default function UserTable() {
  const dataSource = users.map((item) => ({ ...item, key: item.id }))
  return (
    <div>
      <HeaderTitle/>

      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{
          defaultPageSize: '10',
          showSizeChanger: true,
          pageSizeOptions: [2, 5, 10, 15]
        }}
      />
    </div>
  )
}
