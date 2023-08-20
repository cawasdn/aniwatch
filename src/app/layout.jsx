import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Providers from './Providers'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aniwatch',
  description: 'Place where you can watch your favorite anime',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
