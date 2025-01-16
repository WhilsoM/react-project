import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { IItem } from 'types/item'

const fetchData = async () => {
  return await axios.get<IItem[]>('https://6729edd66d5fa4901b6f05f6.mockapi.io/items')
}

export const useItems = (isEnabled: boolean) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['items'],
    queryFn: fetchData,
    select: (data) => data.data,
    enabled: isEnabled,
  })

  useEffect(() => {
    if (isSuccess) console.log('Data fetched successfully')
  }, [isSuccess])

  useEffect(() => {
    if (isError) console.log('error fetching data')
  }, [isError])

  return { data, isLoading, isSuccess, isError }
}
