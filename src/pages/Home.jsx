import { news } from '../utils/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper className='section-center blog-center page'>
      {news.map((story) => {
        const { id, styling, author, date, img, title, description } = story
        return (
          <article className='blog' key={id}>
            <div className='img-container'>
              <img src={img} alt='' className='img' />
            </div>
            <div className='blog-info'>
              <h4>{title}</h4>
              <h6>Written by: {author} </h6>
              <h6>{date}</h6>
              <p>{description.slice(0, 130)}....</p>
              <button className='btn'>Read More</button>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .blog {
    margin-bottom: 2rem;
    max-width: 30rem;
    /* max-height: 15rem; */
  }
  .img-container {
    max-width: 30rem;
  }
  @media (min-width: 576px) {
    .blog {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      max-width: 100%;
    }
    .img-container {
      max-width: 30rem;
    }
  }
  @media (min-width: 676px) {
    .blog-info {
      height: 10rem;
    }
  }
`

export default Home
// .projects-text {
//   width: 85vw;
//   max-width: 30rem;
//   margin: 0 auto;
// }
// .project {
//   position: relative;
//   background: var(--clr-primary-5);
//   border-radius: var(--radius);
//   margin-bottom: 2rem;
// }
// .project-info p {
//   text-transform: capitalize;
//   color: var(--clr-white);
// }
// .project:hover .project-info {
//   opacity: 1;
// }
// .project-img {
//   border-radius: var(--radius);
//   height: 15rem;
//   object-fit: cover;
// }
// .project:hover .project-img {
//   opacity: 0.1;
// }
// .project::after {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   border: 0.25rem solid var(--clr-white);
//   border-radius: var(--radius);
//   -webkit-transition: var(--transition);
//   transition: var(--transition);
//   opacity: 0;
// }
// .project:hover::after {
//   opacity: 1;
//   -webkit-transform: scale(0.8);
//   transform: scale(0.8);
// }
// @media screen and (min-width: 676px) {
//   .projects-center {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     -webkit-column-gap: 2rem;
//     -moz-column-gap: 2rem;
//     column-gap: 2rem;
//   }
// }
// @media screen and (min-width: 992px) {
//   .projects-center {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }
// @media screen and (min-width: 1170px) {
//   .projects-center {
//     grid-template-rows: 200px 200px;
//     gap: 1rem;
//     grid-template-areas:
//       'a b b'
//       'a c d';
//   }
//   .project {
//     height: 100%;
//   }
//   .project-img {
//     height: 100%;
//   }
//   .project-1 {
//     grid-area: b;
//   }
//   .project-2 {
//     grid-area: a;
//   }
//   .project-3 {
//     grid-area: c;
//   }
//   .project-4 {
//     grid-area: d;
//   }
// }
