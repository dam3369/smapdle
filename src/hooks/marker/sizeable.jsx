import { useState } from 'react'

export const useSizeable = (mSize = 0) => {
  const [size, setSize] = useState(mSize);

  return [
    size,
    setSize
  ]
}

export default useSizeable
