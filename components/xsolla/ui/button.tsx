"use client";

import { Button } from "@/components/ui/button"
import { KeyRound } from 'lucide-react';
import { useRouter } from 'next/navigation'

export default function XsollaButton({ route, label, icon }: { route: string, label: string, icon: boolean}) {
  const router  = useRouter()
  const onClick = () => {
    router.push(route)
  }

  return (
    <div>
      <Button onClick={onClick} size="lg">
        {label}
        {icon && <KeyRound className="w-4 h-4 ml-2" />}
      </Button>
    </div>
  )
}

