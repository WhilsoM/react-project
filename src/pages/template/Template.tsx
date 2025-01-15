interface ITemplate {
  title: string
}

export const Template = ({ title }: ITemplate) => {
  return <div>{title}</div>
}
