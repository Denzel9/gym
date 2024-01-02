import { SignInButton } from '@clerk/clerk-react'
import { FunctionComponent } from 'react'

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
  return (
    <>
      <h1>auth</h1>
      <SignInButton afterSignInUrl="/" />
    </>
  )
}

export default Auth
