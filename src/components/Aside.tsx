import { menuToUri } from "@/utils/menu-to-uri"
import { menus } from "@/utils/menus"
import clsx from "clsx"
import Link from "next/link"

export function Aside() {
  return (
    <aside className={'hidden lg:flex fixed hover:flex  w-[9em]  flex-col pb-10'}>
      {menus().map(menu => {       
        return (
          <Link
            key={menu}
            // onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
            href={`/${menuToUri(menu)}`}
            className={clsx('py-3 pl-5 text-gray-900 hover:text-gray-800 hover:bg-blue-100 transition-colors rounded ', {
              // 'text-gray-800 font-bold border-b-4 border-b-blue-300 rounded-none transition-colors': menuToUri(menu) === location.pathname.replace('/', '') || menu === 'Home' && location.pathname === '/',
            })}>
            {menu}
          </Link>
        )
      })}
    </aside>
  )
}