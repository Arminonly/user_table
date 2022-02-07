import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SideBarItem = () => {
  let navigate = useNavigate()
  const li = (
    <>
      <li onClick={() => navigate('/ModulesMain')}>Модули</li>
      <li>Теория</li>
      <li>Задачи </li>
      <li>Чек-листы</li>
    </>
  )
  return <>{li}</>
}
