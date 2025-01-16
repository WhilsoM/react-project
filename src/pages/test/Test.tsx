import { useQuery } from '@tanstack/react-query'

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export const Test = () => {
  const { data, isLoading } = useQuery({ queryKey: ['posts'], queryFn: getData })
  return (
    <div>
      {isLoading
        ? 'Loading...'
        : data?.length
        ? data?.map((el: any) => <div key={el.id}>{el.title}</div>)
        : 'Not found'}
    </div>
  )
}
