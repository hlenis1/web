import React from 'react'
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
import logo from "./1.png";

export default function App() {
  return (
    <FloatingWhatsApp
      phoneNumber='+573196946020'
      accountName='STYLEPC'
      avatar={logo} 
      statusMessage='Construimos tus ideas'
      chatMessage='Hola 👋 En que puedo ayudarte?'
      darkMode={false}
      allowClickAway={true}
      allowEsc={true}
      notification={true}
      notificationSound={true}
    />
  )
}
