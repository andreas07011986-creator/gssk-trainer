import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GSSK Trainer',
  description: 'Interaktiver Trainer für Grundlagen Sicherheit Schulung und Kompetenzen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
