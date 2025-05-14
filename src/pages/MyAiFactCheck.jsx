import styled from 'styled-components'

const MyAiFactCheck = () => {
  return (
    <Wrapper className='page section section-center'>
      <div className='fact'>
        <label for='factcheck'>
          Enter the claim you want to fact-check into the text box below
        </label>
        <textarea id='factcheck' name='factcheck' rows='4' cols='50'></textarea>
        <button type='submit' className='btn'>
          Check Authenticity
        </button>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  /* display: grid;
  align-items: center; */
  .fact {
    display: grid;
    row-gap: 2rem;
    align-items: center;
  }
  .page {
    max-width: 50%;
  }
  label {
    font-size: 2rem;
    font-weight: bold;
  }
  textarea {
    /* display: block; */
    /* margin-top: 2rem; */
    font-size: 1.2rem;
    /* font-weight: bold; */
  }
  button {
    margin-top: 2rem;
    max-width: 50%;
  }
`
export default MyAiFactCheck
