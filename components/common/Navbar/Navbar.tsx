import { FC } from 'react'
import Link from 'next/link'
import s from './Navbar.module.css'
import { Logo, Container } from '@components/ui'
import { Searchbar, UserNav } from '@components/common'
import { I18nWidget } from '@components/common'
// import MyLogo from '@public/FuzionElectronics.
import Image from 'next/image'

interface Props {
  className?: string
}
//import cn from 'classnames'
//import throttle from 'lodash.throttle'

const Navbar: FC<Props> = ({ className }) => {
  const rootClassName = className

  // useEffect(() => {
  //   const handleScroll = throttle(() => {
  //     const offset = 0
  //     const { scrollTop } = document.documentElement
  //     const scrolled = scrollTop > offset
  //     setHasScrolled(scrolled)
  //   }, 200)sadfsadfasdf tiit's very slow wve

  //   document.addEventListener('scroll', handleScroll)
  //   return () => {
  //     document.removeEventListener('scroll', handleScroll)
  //   }dfdsf
  // }, [])fsd

  return (
    <div className={rootClassName}>
      
        {/* <div className="flex justify-between text-xs align-center flex-row py-2 md:py-1 relative">
          <div className="flex flex-1 items-center"> */}
            
              <nav className="bg-blue-900 shadow-lg">
                <div className="container mx-auto p-3">
                  <div className="flex space-x-2 sm:flex justify-around text-white text-sm md:space-x-8 relative" >
                  <div className='logo-wrapper' >
                    <Link href="/">
                      <a className={s.logo} aria-label="Logo">
                        {/* <Logo /> */}
                      <Image src='/FuzionElectronics.png' alt='logo' width='200px' height='100px' />
                      </a>
                    </Link>
                    <div className='search-bar'>
                      <div className="justify-center flex-1 hidden lg:flex">
                          <Searchbar />
                      </div>

                      <div className="flex pb-4 lg:px-6 lg:hidden">
                          <Searchbar id="mobile-search" />
                      </div>
              
                    </div>
                  </div>
                
                <Link href="/">
                  <a className={s.link}>Login</a>
                </Link>
                <Link href="/search?q=clothes">
                  <a className={s.link}>Register</a>
                </Link>
                <Link href="/search?q=accessories">
                  <a className={s.link}>Contact</a>
                </Link>
                <div className="flex justify-center flex-1 space-x-8">
                <I18nWidget />
                </div>

              <div className="flex justify-end flex-1 space-x-4">
               <UserNav />
               </div> 

              
            </div>
            </div>
          
          </nav>
          </div>
    //  </div>
     
    //    </div>
       //</div>
   
  )
}

export default Navbar
