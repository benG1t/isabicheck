import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper className='contact section' id='contact'>
      <div className='section-title'>
        <h2 className='title '>Connect With Us</h2>
        <div className='underline'></div>
      </div>
      <div className='contact-center section-center'>
        <div className='contact-info'>
          <h4 className='title'>Address</h4>
          <p>
            Address Suite 302, Ammah plaza, Gwarinpa, Abuja 900108, Federal
            Capital Territory
          </p>
          <h4 className='title'>Email</h4>
          <p>Isabicheck.africa@gmail.com</p>
          <h4 className='title'>Phone Number</h4>
          <p>+2348132369296</p>
        </div>
        <form action='https://formspree.io/f/manooqbo' method='POST'>
          <input type='text' name='name' placeholder='Name' />
          <input type='email' name='email' placeholder='Email' />
          <input type='text' name='message' placeholder='Message' />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 85vh;
  background: var(--clr-grey-10);
  .contact-center {
    display: grid;
    gap: 2rem;
  }
  input {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    border-radius: var(--radius);
    padding: 0.5rem;
    width: 100%;
    border: none;
  }
  .btn {
    width: 100%;
    height: 3rem;
  }
  .contact-info {
    font-size: 1rem;
    p {
      color: var(--clr-grey-1);
      text-align: center;
      margin-top: -0.3rem;
    }
    h4 {
      color: var(--clr-grey-3);
    }
  }
  .section-title {
    margin-bottom: 3rem;
    h2 {
      color: var(--clr-grey-1);
    }
  }
  .icon {
    a {
      color: var(--clr-grey-1);
    }
  }
  @media (min-width: 786px) {
    .contact-center {
      grid-template-columns: 1fr 1fr;
    }
    .email {
      font-size: 1.1rem;
    }
  }
`
export default Contact
