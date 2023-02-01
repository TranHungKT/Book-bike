import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'

const TimeOut = () => {
  const [count, setCount] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          clearInterval(interval)
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <Text>00:{count}</Text>
}

export default TimeOut
