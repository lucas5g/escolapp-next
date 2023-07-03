'use client'
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { translate } from "@/utils/translate";
import { FormEvent, useState } from "react";

export default function Login() {

  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<any>()

  return (
    <>
      <form onSubmit={handleLogin} className='flex flex-col gap-5 p-5' >

        <Input
          type='email'
          name="email-login"
          label="E-mail"
          value={email ?? ''}
          onChange={event => setEmail(event.target.value)}
          error={translate(errors?.email)}
        />
        <Input
          type='password'
          name="password-login"
          label="Password"
          value={password ?? ''}
          onChange={event => setPassword(event.target.value)}
          error={translate(errors?.password)}
          autoComplete="no"

        /> 
        <footer className="flex justify-end">
           <Button
            id="button-login"
            disabled={loading}
            value={'Acessar'}
          /> 
        </footer>
      </form>
    </>
  )

  async function handleLogin(){
    return console.log('qweqwe')
  }
  // async function handleLogin(event: FormEvent) {
  //   event.preventDefault()

  //   setLoading(true)
  //   return console.log('werwer')

  //   try {
  //     const { data } = await api.post('login', {
  //       email,
  //       password
  //     })
  //     localStorage.setItem('accessToken', data.accessToken)
  //     location.href = '/'
  //     await sleep(200)
  //   } catch (error: any) {
  //     const { message, errors } = error?.response.data
  //     if (
  //       message.includes('Please make sure your database server') || message.includes('Environment variable not found:') ||
  //       message.includes('Invalid `prisma.user.findUnique()`')
  //     ) {
  //       return alert('Erro no Banco de Dados :(')
  //     }
  //     if (errors) {
  //       return setErrors(errors)
  //     }
  //     return alert(message)
  //   } finally {
  //     setLoading(false)
  //   }

  // }
}