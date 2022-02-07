import React from 'react'
import { SideBarItem } from './SideBarItem'

export const SideBarList = () => {
const styles={
    ul:{
        listStyle:'none',
        fontSize: '18px',
        lineHeight:'60px',
        marginTop: '20px',
        marginLeft: '30px',
        color:'#8A9597',
        cursor: 'pointer'
    }
} 
  return (
      <ul style={styles.ul}>
        <SideBarItem  />
      </ul>
  )
}
