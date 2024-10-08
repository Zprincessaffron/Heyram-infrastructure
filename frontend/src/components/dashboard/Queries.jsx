import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function Queries() {
  const { setSelectedNav } = useContext(AdminContext)

  useEffect(() => {
    setSelectedNav("queries")
  }, [])
  

  return (
    <div>Queries</div>
  )
}

export default Queries