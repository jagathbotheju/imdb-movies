import './globals.css'

export const metadata = {
  title: 'IMDb Movies',
  description: 'IMDB movie clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
