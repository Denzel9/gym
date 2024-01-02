import { SignInButton } from '@clerk/clerk-react'
import { FunctionComponent } from 'react'

const SignIn: FunctionComponent = () => {
  return (
    <div>
      <h1>Auth</h1>
      <SignInButton>auth</SignInButton>
    </div>
  )
}

export default SignIn
