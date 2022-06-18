import { useEffect, useState } from 'react'

const Index = ({
  text,
  arc,
  radius,
}: {
  text: string
  arc: number
  radius: number
}) => {
  const characters = text.split('')
  const degree = arc / characters.length

  return (
    <>
      {characters.map((char, i) => (
        <span
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            transform: `rotate(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}
        >
          {char}
        </span>
      ))}
    </>
  )
}
export default Index
