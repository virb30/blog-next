import { redirect, RedirectType } from "next/navigation";
import "./Letter.css"
import Letter from "@/components/Letter/Letter";
import { decodeLetterToken } from "./_validation/letter-token-validator";

export default async function Page({
  searchParams
}: { searchParams: Promise<{ token: string }> }) {
  const { token } = await searchParams;

  const decoded = decodeLetterToken(token);
  if (!decoded) {
    return redirect("/", RedirectType.replace);
  }

  return (
    <h1>
      <Letter title={decoded.title} surname={decoded.surname} gender={decoded.gender} />
    </h1>
  )
}