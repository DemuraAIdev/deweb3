'use client'
import React from 'react'
import Typed from 'typed.js'
export default function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      loop: true,
      smartBackspace: true,
      fadeOut: true,
      cursorChar: '_',
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <>
      <ul id="bios" className="hidden">
        <li>I live in indonesia.</li>
        <li>I love NODEJS.</li>
        <li>I love J-Core, EDM, DnB Liquid music.</li>
      </ul>
      <span ref={el} className="select-none text-lg text-neutral-900 dark:text-neutral-200" />
    </>
  )
}
