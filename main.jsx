import React from 'react'
import { createRoot } from 'react-dom/client'
import Markdown from 'react-markdown'
import introduction from './about.md?raw'
import './style.css'

createRoot(document.getElementById('root')).render(
  <main className="mx-auto max-w-[40rem] [overflow-wrap:anywhere] px-6 pt-[clamp(3rem,12vw,8rem)] pb-16">
    <Markdown>{introduction}</Markdown>
  </main>,
)
