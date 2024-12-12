'use client'

import { ReactNode } from 'react'
import { useScroll } from '@/hooks/use-scroll'

export default function DynamicScrollHeader({ children }: { children: (scrolled: boolean) => ReactNode }) {
  const scrolled = useScroll()
  return <>{children(scrolled)}</>
}

