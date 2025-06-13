import { useParams } from 'react-router-dom'
import { staff } from '../utils/constants'
import styled from 'styled-components'

const SingleTeamMember = () => {
  const { id } = useParams()

  let arr = staff.filter((person) => id == person.id)
  let item = arr[0]

  const name = item?.name
  const img = item?.img
  const title = item?.title
  const description = item?.description

  return (
    <Wrapper className='page section section-center'>
      <div className='img-container-person'>
        <img src={img} alt='' className='img-person' />
      </div>
      <div className='person-info'>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .img-container-person {
    width: 100%;
  }
  .img-person {
    border-radius: var(--radius);
    max-width: 100%;
    display: block;
    object-fit: cover;
  }
  .person-info {
    margin-top: 1rem;
    h4,
    h3 {
      text-align: center;
    }
    p {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      white-space: pre-wrap;
    }
  }
  @media (min-width: 576px) {
    .img-person {
      height: 20rem;
      width: 100%;
      object-fit: contain;
    }
  }
`
export default SingleTeamMember
