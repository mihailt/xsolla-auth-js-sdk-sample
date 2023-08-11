import AuthDone from "@/components/xsolla/ui/auth/done";
import { type AuthDoneParams } from "@/components/xsolla/ui/auth/done"

export default function AuthDonePage({
  searchParams,
}: {
  searchParams: AuthDoneParams
}) {
  return (
    <div>
        <AuthDone searchParams={searchParams} redirectRoute={"/"} />
    </div>  
  );
}