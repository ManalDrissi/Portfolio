import Image from 'next/image'
import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <Image src="icon.png" alt="" />
    ),
    {
      ...size,
    }
  )
}
