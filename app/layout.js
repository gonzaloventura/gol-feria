import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GOL - Smiles',
  description: 'Aerolinea Gol',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">{children}</body>
      
    </html>
  )
}
