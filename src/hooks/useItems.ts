import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { IItem } from 'types/item'

const API_URL = 'https://6729edd66d5fa4901b6f05f6.mockapi.io/items'

const itemsPerPage = 10

const fetchData = async (page = 1, sortBy = 'alphabet', value = '') => {
  try {
    let url = `${API_URL}?page=${page}&limit=${itemsPerPage}&sortBy=${sortBy}&order=asc&search=${value}`

    return await axios.get<IItem[]>(url)
  } catch (error) {
    console.error(error)
  }
}

export const useItems = (page: number, sort: string, value: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['items', page, sort, value],
    queryFn: () => fetchData(page, sort, value),
    select: (data: any) => data.data,
  })

  useEffect(() => {
    if (isSuccess) console.log('Data fetched successfully')
  }, [isSuccess])

  useEffect(() => {
    if (isError) console.log('error fetching data')
  }, [isError])

  return { data, isLoading, isSuccess, isError }
}
