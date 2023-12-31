import { useAuth } from '@clerk/clerk-react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Test: FunctionComponent = () => {
  const { userId } = useAuth()
  console.log(userId)
  return (
    <>
      <h1>Oops</h1>
      <Link to={'/training'}>Main</Link>
    </>
  )
}

export default Test
