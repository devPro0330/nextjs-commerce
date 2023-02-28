import { FC, useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { Grid } from '@components/ui'
import { ProductCard } from '@components/product'
import { getCategoryPath, getDesignerPath } from '@lib/search'
import { Cross, ChevronUp } from '@components/icons'
import s from './HomeNav.module.css'


interface Props {
  categories?: any
}

const HomeNav = ({ categories }: Props) => {
  const [display, setDisplay] = useState(false)
  
  return (
    <>
      <nav className="menuNav w-150 bg-blue-900">
        {/* <div className="menuContent mb-40 mt-40 bg-blue-800 text-white text-sm"> */}
        <div className={cn(s.menuContent)}>
          {/* <div className="menuItem w-750 flex"> */}
          <div className={cn(s.menuItem)}>
            { categories && categories.map((category: any, index: number) => {
              return (
                <div className={cn(s.menuItemTitle)} key={index}>
                  <span className={cn(s.dropdownMenu)}>
                      <Link href={ `/search${category.path}` } >
                      {category.name}
                      </Link>
                    
                    <ChevronUp className={cn({ [s.icon]: display })} />
                  </span>
                  {/* ****************************************************** Sub Menu ****************************************************************************/}
                  <div className={cn(s.subMenu)}>
                    <div className={cn(s.subMenuItem)}>
                      { category.children[0] && category.children.map((item: any, index: number) => {
                        return (
                          <div key={index}>
                            <Link href={ `search?q=${item.path}` }>
                              <a>{item.name}</a>
                            </Link>

                            <div className={cn(s.subMenuItem2)}>
                              {item.children[0] && item.children.map((item: any, index: number) => {
                                return (
                                  <Link href={ `search?q=${item.path}` } key={index}>
                                     <a >{item.name}</a>
                                 </Link>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {/* <div className={cn(s.backArea)} >

        </div> */}
      </nav>
    </>
  )
}


export default HomeNav
