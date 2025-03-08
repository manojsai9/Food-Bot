import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const RLogout = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
        obj.updstate({"token":"","_id":"","name":"","role":""})
        navigate("/api/home")
    },[])
  return (
    <div>Logout</div>
  )
}
export default RLogout