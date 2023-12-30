'use client'
import { genPageMetadata } from '@/app/seo'
import { useState, useRef, FormEvent } from 'react'
import { useFormStatus } from 'react-dom'
import { BiSolidPaperPlane } from 'react-icons/bi'

export default function TranslateC() {
  const inputEl = useRef<HTMLInputElement>(null)
  const [translate, setTranslate] = useState('')

  const handleSubmitTranslate = async (e) => {
    e.preventDefault()

    // Use the transformKata function to translate the input
    const result = transformKata(inputEl.current?.value)
    setTranslate(result)
  }

  return (
    <>
      <form className="relative max-w-[500px]" onSubmit={handleSubmitTranslate}>
        <input
          ref={inputEl}
          aria-label="Kata"
          placeholder="Masukan Kata yang ingin di ubah..."
          name="entry"
          type="text"
          required
          className="mt-1 block w-full rounded-md border-neutral-300 bg-gray-100 py-2 pl-4 pr-20 text-neutral-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100"
        />
        <SubmitButton />
      </form>
      <div className="mb-4 flex flex-col space-y-1">
        <div className="w-full break-words text-sm">
          <span className="mr-1 text-neutral-600 dark:text-neutral-400">Translate:</span>
          {translate}
        </div>
      </div>
    </>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      className="absolute right-1 top-1 flex h-8 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
      disabled={pending}
      type="submit"
    >
      {pending ? '...' : <BiSolidPaperPlane />}
    </button>
  )
}

function transformKata(input) {
  const vokal = ['a', 'i', 'u', 'e', 'o']
  let output = ''

  for (let i = 0; i < input.length; i++) {
    const huruf = input[i]
    output += huruf

    if (vokal.includes(huruf.toLowerCase())) {
      output += 'g' + huruf.toLowerCase()
    }
  }

  return output
}
