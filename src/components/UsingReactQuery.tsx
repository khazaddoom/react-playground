import React from 'react'
import { useQuery } from '@tanstack/react-query'

const getDogImage = async () => {
  return (await fetch('https://dog.ceo/api/breeds/image/random')).json()
}

function UsingReactQuery() {
  const { isPending, isError, data, error } = useQuery({ queryKey: ['dogImage'], queryFn: getDogImage })
  
  if (isPending) {
    return <img src="https://placehold.co/600x400" alt="placeholder image" />
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <img src={data.message} alt="random dog image"
      style={{
        height: '400px',
        width: '600px'
      }}/>
  )
}

export default UsingReactQuery