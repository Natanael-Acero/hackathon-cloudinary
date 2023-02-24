'use client'

import './globals.css';
import Navigation from './components/Navigation';

export default function RootLayout({ children }) {

  return (
    <html lang="en" data-theme="cmyk">
      <head />
      <title>Cloudinary Hackathon</title>
      <meta name="description" content="Cloudinary Hackathon" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
