'use client'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <title>Cloudinary Hackathon</title>
      <meta name="description" content="Cloudinary Hackathon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        {children}
      </body>
    </html>
  )
}
