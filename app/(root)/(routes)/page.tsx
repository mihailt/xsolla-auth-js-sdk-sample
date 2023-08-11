"use client";

import { useXsollaAuthStore } from "@/components/xsolla/store/auth";
import XsollaButton from "@/components/xsolla/ui/button";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const Icons = {
  spinner: Loader2,
};


export default function AuthPage() {
  const {loading, token, user, setLoading, fetchUser} = useXsollaAuthStore()
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const load = async () => {
      if (!loading) {
        if(!token) {
          setLoading(true)
          setShowLogin(true)
          setLoading(false)  
        } else if (!user) {
          await fetchUser()
        }
      }   
    }

    load();
  }, [])

  if (loading) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-col">
          <Icons.spinner className="h-8 w-8 animate-spin shadow-none stroke-gray-400" />
        </div>
      </div>
    )
  } else if (showLogin) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <XsollaButton route={"/auth/authenticate"} label="Authenticate" icon={true} />
        </div>
      </div>
    )
  
  } else if (user) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <div>{user.email}</div>
          <XsollaButton route={"/auth/signout"} label="Sign out" icon={false} />
        </div>
      </div>
    )
  } else if (token) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="w-24 h-6 overflow-hidden truncate">
          {token}
        </div>
      </div>
    )
  }

}

