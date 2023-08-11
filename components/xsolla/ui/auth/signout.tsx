"use client";

import { useEffect } from "react";
import {Loader2} from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useXsollaAuthStore } from "../../store/auth";
import { delay } from "@/lib/utils";

export const Icons = {
  spinner: Loader2,
};


export default function AuthSignout({
  redirectRoute
}: {
  redirectRoute: string
}) {

  const router = useRouter()
  const { signout } = useXsollaAuthStore()

  useEffect(() => {
    const op = async () => {
      await delay(200)
      signout()
      router.push(redirectRoute)
    }

    op().catch(console.error);
  }, [router, redirectRoute, signout])

  return (
    <div className="flex flex-col">
      <Icons.spinner className="h-8 w-8 animate-spin shadow-none stroke-gray-600" />
    </div>
  );
}