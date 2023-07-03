import clsx from "clsx"
import { Loader2 } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // primary?:boolean
  secondary?:boolean 

}
export function Button({ secondary=false, ...props }: Props) {
  return (
    <button
      className={clsx("text-white w-32 h-11 rounded flex items-center justify-center", {
        'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400': !secondary,
        'bg-red-500 hover:bg-red-600':secondary
      })}
      {...props}
    >
      {props.disabled &&
        <Loader2 className="animate-spin" size={20} color='#ffffff' fontWeight={'bold'} />}
      {!props.disabled && props.value}

    </button>

  )
}