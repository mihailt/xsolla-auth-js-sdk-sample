"use client";

import { useEffect } from "react";
import {Loader2} from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useXsollaAuthStore } from "../../store/auth";

export const Icons = {
  spinner: Loader2,
};

export interface AuthDoneParams {
  token?: string
}

export default function AuthDone({
  searchParams,
  redirectRoute
}: {
  searchParams: AuthDoneParams,
  redirectRoute: string
}) {

  const router = useRouter()
  const { setToken } = useXsollaAuthStore()

  const token = searchParams.token

  useEffect(() => {
    const op = async () => {
      setToken(token)
      router.push(redirectRoute)
    }

    op().catch(console.error);
  }, [token, router, redirectRoute, setToken])

  return (
    <div className="flex flex-col">
      <Icons.spinner className="h-8 w-8 animate-spin shadow-none stroke-gray-600" />
    </div>
  );
}