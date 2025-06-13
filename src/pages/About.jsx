import React from 'react'
import { staff } from '../utils/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return (
    <main>
      <Wrapper className='page section section-center'>
        {/* <img src={aboutImg} alt='nice desk' /> */}
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Isabi Check Africa (ICA) is an independent AI Driven fact-checking
            platform, formally registered as an entity under The Esimaje Michael
            Foundation (TEM Foundation), a non-governmental, non-profit
            organization incorporated under Nigeria’s Corporate Affairs
            Commission (CAC), with registration number CAC/IT/NO 176452.
          </p>
          <p>
            Our mission is to provide AI Enabled, verifiable, timely, and
            unbiased fact-checked reports focused on: Electoral Irregularities
            Deep fake News De-escalation Accountability in governance Climate
            Change & Illegal Mining Crisis and Conflict Situational Reports
            across Africa.
          </p>
          <p>
            The core of our thematic focus is to ensure fiscal transparency,
            public accountability, whilst driving social equity and sustainable
            development across the African continent. We trust that access to
            verifiable information is a fundamental right of all Africans and
            thus empowers citizens to make informed and rational decisions. At
            Isabi Check Africa, we are poised at upholding the highest standards
            of reporting integrity, ensuring that all of our reports are free
            from social or financial influences. Our Objectives is to ensure the
            promotion of factual and verifiable information that contributes to
            the well-being and progress of the African Continent.
          </p>
        </article>
        {/* team experts */}
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
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  /* img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  } */
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 1rem;
  }
  .title {
    text-align: center;
  }
  /* @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  } */
  /* ppppppppperson */
  .img-container {
    max-width: 30rem;
    /* min-height: 30rem; */
  }
  .img {
    border-radius: var(--radius);
    /* min-height: 100%; */
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
  /* .title {
    margin-top: 4rem;
    text-align: center;
  } */
  .person-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 2rem;
  }
`
export default AboutPage
