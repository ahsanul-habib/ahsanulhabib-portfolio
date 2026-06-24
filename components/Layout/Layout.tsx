'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import styles from '@/styles/Layout.module.css'
import Titlebar from './Titlebar'
import Sidebar from './Sidebar'
import Explorer from './Explorer'
import Tabsbar from './Taskbar'
import Bottombar from './Bottombar'

const Layout = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    const main = document.getElementById('main-editor')

    if (main) {
      main.scrollTop = 0
    }
  }, [pathname])

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main id="main-editor" className={styles.content}>
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  )
}

export default Layout