'use client'
import { menuToUri } from "@/utils/menu-to-uri";
import { Card } from "./Card";
import { menus } from "@/utils/menus";
import { usePathname } from 'next/navigation'


export function Title() {

  const titleHeader = menus()
    .find(menu => menuToUri(menu) === usePathname().replace('/', '')) ?? 'Home'

  // document.title = `${titleHeader} | EscolApp`
  return (
    <Card >
      <h1 className="text-4xl">
        {titleHeader}
      </h1>
    </Card>
  )
}