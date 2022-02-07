import React from 'react'
import { Input, Space } from 'antd'
const { Search } = Input

export const HeaderInput = () => {
  const onSearch = (value) => console.log(value)

  const [value, setValue] = React.useState('')

  return (
    <Space style={{ marginTop: '30px' }}>
      <Search
        type="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder="поиск"
        onSearch={onSearch}
      />
    </Space>
  )
}
