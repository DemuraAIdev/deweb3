'use client'

import React from 'react'

const styles = `
  body {
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8;
    text-align: center;
    margin: 0;
    padding: 40px;
  }

  h2 {
    color: #ff5252;
  }

  pre {
    white-space: pre-wrap;
    font-size: 16px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 20px 0;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #45a049;
  }
`

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <head>
        <style>{styles}</style>
      </head>
      <body>
        <h2>RARE ERROR FOUND CONTACT ME AF</h2>
        <h1>X_X</h1>
        <pre>{error.message}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
