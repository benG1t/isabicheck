import { staff } from '../utils/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TeamMembers = () => {
  return (
    <Wrapper>
      <div>
        <div className='title'>
          <h2>Expert Team Members</h2>
          <div className='underline'></div>
        </div>
        <div className='person-center section-center'>
          {staff.map((person) => {
            const { id, name, img, title, description } = person
            return (
              <article className='person' key={id}>
                <div className='img-container-person'>
                  <img src={img} alt='' className='img img-person' />
                </div>
                <div className='person-info'>
                  <h4>{name}</h4>
                  <p>{title}</p>
                  <Link to={`/single-team-member/${id}`} className='btn'>
                    More Info
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .img-container {
    max-width: 30rem;
  }
  .img {
    border-radius: var(--radius);
  }
  .person-info {
    margin-top: 1rem;
    p {
      margin-top: -0.15rem;
      margin-bottom: 1rem;
    }
  }
  .img-container-person {
    height: 20rem;
  }
  .img-person {
    height: 20rem;
  }
  .person-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
  }
`
export default TeamMembers
