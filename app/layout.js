import Footer from './Footer'
import Header from './Header'
import './globals.css'
import { Rubik, Montserrat } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'] ,
  variable: '--font-rubik',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = {
  title: 'GetPet',
  description: 'Pet services in elmwood park and surrounding neighborhoods',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${montserrat.variable}`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
