import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  </StrictMode>,
)
