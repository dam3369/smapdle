import { useState } from 'react'

export const useError = () => {
  const [ isError, setIsError ] = useState(false)
  const [ error, setError ] = useState('')

  const trigger = (isError, reason) => {
    setIsError(isError)
    if (isError) { setError(reason.message) }
  }

  return [ isError, error, trigger ]
}
