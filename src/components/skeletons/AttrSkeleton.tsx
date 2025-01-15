import ContentLoader from 'react-content-loader'

export const AttrSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={489}
      height={400}
      viewBox='0 0 489 400'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='37' y='8' rx='11' ry='11' width='417' height='181' />
      <rect x='194' y='199' rx='18' ry='18' width='74' height='44' />
      <rect x='167' y='255' rx='9' ry='9' width='131' height='17' />
      <rect x='75' y='285' rx='7' ry='7' width='319' height='98' />
    </ContentLoader>
  )
}
