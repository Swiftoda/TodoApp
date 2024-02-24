import { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  children: ReactNode
}

const Layout: FC<Props> = ({ children, title = 'Nextjs' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justift">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  )
}

export default Layout
