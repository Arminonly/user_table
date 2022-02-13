import React from 'react'
import { Table, Tag, Space, Input, Button, Modal } from 'antd'
import { users } from './data'
import { HeaderTitle } from './tableHeader/HeaderTitle'
import { Link } from 'react-router-dom'

import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'

export default class UserTable extends React.Component {
  // const dataSource = users.map((item) => ({ ...item, key: item.id }))

  state = {
    searchText: '',
    searchedColumn: '',
    modalIsVisible: false,
    }
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
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
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex
              })
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100)
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  })

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    })
  }

  handleReset = (clearFilters) => {
    clearFilters()
    this.setState({ searchText: '' })
  }
  modalIsVisible(modalIsVisible) {
    this.setState({ modalIsVisible })
  }

  render() {
    const columns = [
      {
        title: 'Имя Фамилия',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        ...this.getColumnSearchProps('name'),
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
          <>
            <Space size="middle">
              <Link style={{ color: '#32CD32' }} to="/ProgressMain">
                Прогресс
              </Link>
              <span
                onClick={() => this.modalIsVisible(true)}
                style={{ color: '#32CD32', cursor: 'pointer' }}
              >
                Изменить
              </span>
            </Space>
          </>
        )
      }
    ]
    return (
      <>
        <HeaderTitle />
        <Table
          columns={columns}
          dataSource={users}
          pagination={{
            defaultPageSize: '10',
            showSizeChanger: true,
            pageSizeOptions: [2, 5, 10, 15]
          }}
        />
        <p>
          <Modal
            title="изменить студента"
            centered
            okText="сохранить"
            cancelText="отменить"
            visible={this.state.modalIsVisible}
            onOk={() => this.modalIsVisible(false)}
            onCancel={() => this.modalIsVisible(false)}
          >
            <Input/>
          </Modal>
        </p>
      </>
    )
  }
}
