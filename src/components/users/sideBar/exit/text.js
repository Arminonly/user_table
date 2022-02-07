import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Text = ({ text }) => {
  let navigate = useNavigate()
  return (
    <span
      onClick={() => navigate('/')}
      style={{ color: '#E0FFFF', cursor: 'pointer' }}
    >
      {' '}
      &emsp; {text}
    </span>
  )
}
