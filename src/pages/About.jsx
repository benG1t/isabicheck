import React, { useState } from 'react'
import { staff } from '../utils/constants'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import OurStory from '../components/OurStory'
import TeamMembers from '../components/TeamMembers'

const AboutPage = () => {
  const [page, setPage] = useState(true)
  return (
    <main>
      <Wrapper className='page section section-center'>
        <div className='container'>
          <button onClick={() => setPage(true)} className='btn about'>
            About Us
          </button>
          <button onClick={() => setPage(false)} className='btn team'>
            Team Members
          </button>
        </div>
        {/* team  OR about */}
        {page ? <OurStory /> : <TeamMembers />}
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  .container {
    /* margin-left: 19%; */
    margin-top: -2rem;
    margin-bottom: 2rem;
  }
  .about {
    margin-right: 2rem;
  }
`
export default AboutPage
