import './globals.css'
import { poppinsFont } from '@/utils/fonts';

export const metadata = {
  title: 'MediaCollege Denmark',
  description: 'Vi arbejder...',
}

export default function RootLayout({ children, params }) {

  console.log('params', params)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppinsFont.className}>
        {children}
      </body>
    </html>
  )
}
