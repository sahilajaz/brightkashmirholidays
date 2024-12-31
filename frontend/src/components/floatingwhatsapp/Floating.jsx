import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Floating = () => {
    const openWhatsApp = () => {
        const phoneNumber = "+916006151196"
        const url = `https://wa.me/${phoneNumber}`
        window.open(url , "_blank")
      }

  return (
    <div>
      <FloatingWhatsApp 
      phoneNumber='+916006151196' 
      accountName='Bright Kashmir Holidays' 
      avatar='logo.jpg'
      chatMessage='Message us for queries about destinations and services.'
      statusMessage=''
      allowEsc={true}
      onClick={openWhatsApp}/>
    </div>
  )
}

export default Floating
