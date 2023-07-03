import { ReactNode } from "react"
import '../globals.css'

interface Props {
  children: ReactNode
}
export default function LoginLayout({ children }: Props) {
  return (
    <html>
      <body className={`bg-blue-50  h-screen`}>
        {children}
      </body>
    </html>
  )
}