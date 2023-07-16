'use client'
import { useRouter } from "next/navigation"

export default function LogoutPage(){

  const router = useRouter()

  router.push('login')

  return (
    <h1>Sair</h1>
  )
}