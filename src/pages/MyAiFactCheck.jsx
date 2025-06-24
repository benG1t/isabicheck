import styled from 'styled-components'
import { Form, useActionData, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useSpeechSynthesis } from 'react-speech-kit'
import { FaPlayCircle } from 'react-icons/fa'
import { FaRegStopCircle } from 'react-icons/fa'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const info = Object.fromEntries(formData)
  const infoData = info.factcheck

  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer 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',
          'HTTP-Referer': 'https://www.sitename.com',
          'X-Title': 'SiteName',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'meta-llama/llama-4-maverick:free',
          messages: [{ role: 'user', content: infoData }],
        }),
      }
    )
    const data = await response.json()
    console.log(data)
    const markdownText =
      data.choices?.[0]?.message?.content || 'No response received.'

    return markdownText
  } catch (error) {
    return error.message
  }
}

const MyAiFactCheck = () => {
  const markdownText = useActionData()
  const { speak, cancel } = useSpeechSynthesis()

  return (
    <Wrapper className='page section section-center'>
      <Form method='post' className='form fact'>
        <label htmlFor='factcheck'>
          Enter the claim you want to fact-check into the text box below
        </label>
        <textarea id='factcheck' name='factcheck' rows='4' cols='50'></textarea>
        <button type='submit' className='btn'>
          Check Authenticity
        </button>
      </Form>
      {/* MARKDOWN VOICE BUTTONS */}
      {markdownText && (
        <button
          className='btn play'
          onClick={() => speak({ text: markdownText })}
        >
          listing to result <FaPlayCircle />
        </button>
      )}
      {markdownText && (
        <button className='btn stop' onClick={() => cancel()}>
          stop listening <FaRegStopCircle />
        </button>
      )}
      {/* DISPLAY TEXT */}
      <div className='markdown'>
        <ReactMarkdown>{markdownText}</ReactMarkdown>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
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
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  button {
    margin-top: 1rem;
    max-width: 50%;
  }
  .play {
    margin-right: 0.5rem;
    margin-top: 2rem;
    background: var(--clr-grey-3);
  }
  .stop {
    background: var(--clr-red-dark);
  }
  .markdown {
    margin-top: 1.5rem;
  }
`
export default MyAiFactCheck
