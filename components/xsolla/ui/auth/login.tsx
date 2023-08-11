"use client";

import { useEffect } from 'react'

export default function Login() {

  useEffect(() => {    

    const XL = require("@xsolla/login-sdk");

    const xl = new XL.Widget({
      projectId: process.env.NEXT_PUBLIC_XSOLLA_PROJECT_ID!,
      preferredLocale: process.env.NEXT_PUBLIC_XSOLLA_PREFFERED_LOCALE!,
      redirectUri: process.env.NEXT_PUBLIC_XSOLLA_REDIRECT_URI! 
    })

    xl.mount('xl_auth')
  }, [])

  return (
    <div>
      <div id="xl_auth" className="h-[500px] w-[320px]"></div>
    </div>
  )
}

