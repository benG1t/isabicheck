import { useParams } from 'react-router-dom'
import { news } from '../utils/constants'
import styled from 'styled-components'

const SingleBlog = () => {
  const { id } = useParams()

  let arr = news.filter((blog) => id == blog.id)
  let item = arr[0]

  const author = item?.author
  const date = item?.date
  const img = item?.img
  const title = item?.title
  const description = item?.description
  console.log(date)

  return (
    <Wrapper className='page section section-center'>
      <article className='blog'>
        <div className='img-container'>
          <img src={img} alt='' className='img' />
        </div>
        <div className='blog-info'>
          <h4>{title}</h4>
          <h6>Written by: {author} </h6>
          <h6>{date}</h6>
          <p>{description}</p>
        </div>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default SingleBlog
