import React from 'react'

const Footer = () => {
    const today = new Date();
const year = today.getFullYear();
 
  return (
   <center><div style={{marginTop:"20px",marginBottom:"20px"}}> © {year} Copyright Vikrant Singh</div></center> 
  )
}

export default Footer;