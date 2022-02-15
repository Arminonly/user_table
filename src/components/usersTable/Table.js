import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Tag, Space, Input, Modal, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { users } from './data'
import { HeaderTitle } from './tableHeader/HeaderTitle'

export default function UserTable() {
  const dataSource = users.map((item) => ({ ...item, key: item.id }))
  const [searchText, setSearchText] = useState('')
  const [searchColumn, setSearchColumn] = useState('')
  

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined/>}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false })
              setSearchText(selectedKeys[0])
              setSearchColumn(dataIndex)
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: () => (
      <SearchOutlined style={{ color: 'lime', fontSize: '28px'}} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
  })

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }

  const columns = [
    {
      title: 'Имя Фамилия',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
      render: (text) => (
        <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
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
      <div>
        <Modal
          title="внести изменения"
          centered
          okText="сохранить"
          cancelText="отменить"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input placeholder="измените имя" style={{ marginBottom: 5 }} />
          <Input placeholder="измените login" />
        </Modal>
      </div>
    </>
  )
}
