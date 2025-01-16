import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { IItem } from 'types/item'

const fetchData = (id: string) => {
  return axios.get<IItem>(`https://6729edd66d5fa4901b6f05f6.mockapi.io/items/${id}`)
}

export const useItem = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['item', id],
    queryFn: () => fetchData(id),
    select: (data) => data.data,
    enabled: !!id,
  })

  return { item: data, isLoading }
}
