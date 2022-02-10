import React from 'react'
import { Input, Space } from 'antd'
import {users} from '../../usersTable/data' 

export const HeaderInput = () => {
  const onSearch = (value) => console.log(value)
   const [value, setValue] = React.useState('')
  const { Search } = Input

  const filteredUsers = users.filter((user)=>{
    return user.name.toLowerCase().includes(value.toLowerCase())
  })
console.log(filteredUsers);

 
  return (
    <Space style={{ marginTop: '30px' }}>
      <Search
        type="search"
        onChange={(e) => setValue(e.target.value)}
        placeholder="поиск"
        onSearch={onSearch}
        filteredusers={filteredUsers}
      />
    </Space>
  )
}
