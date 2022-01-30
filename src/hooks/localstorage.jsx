import { useState } from 'react'

const useLocalstorage = (key, initialValue) => {
  const [ storedValue, setStoredValue ] = useState(window.localStorage.getItem(key) ?? initialValue)

  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, value)
  }

  return [ storedValue, setValue ]
}

export default useLocalstorage
