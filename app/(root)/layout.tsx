"use client"
import { StreamVideoProvider } from '@/providers/StreamClientProvider'
import React,{ ReactNode} from 'react'

const layout = ({ children }: {children: ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default layout