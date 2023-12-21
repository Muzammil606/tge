import { Quicksand, Love_Ya_Like_A_Sister } from 'next/font/google'
import './globals.css'

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap'
})

const loveSister = Love_Ya_Like_A_Sister({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-love-sister',
  display: 'swap'
})

export const metadata = {
  title: 'The Great Escape Water Park',
  description: 'The Great Escape Water Park',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${loveSister.variable}`}>{children}</body>
    </html>
  )
}
