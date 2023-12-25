import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

// Fungsi transformKata yang Anda kirimkan
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

// Fungsi handler untuk metode POST
export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Ambil parameter input dari body request
    const translate = transformKata(req.body.body || '')

    // Panggil fungsi transformKata dengan input
    const output = {
      translates: translate,
    }

    // Kirim respons JSON dengan output
    NextResponse.json(output)
  } catch (error) {
    // Jika terjadi error, kirim error ke output
    NextResponse.error()
  }
}
