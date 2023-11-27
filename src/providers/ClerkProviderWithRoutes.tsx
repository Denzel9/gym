import { FunctionComponent } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from '../pages/Main'
import ReportTraining from '../pages/ReportTraining'
import Training from '../pages/Training'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Layout from '../components/layout/Layout'
import Calendar from '../pages/Calendar'
import Profile from '../pages/Profile'

const ClerkProviderWithRoutes: FunctionComponent = () => {
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
  const navigate = useNavigate()
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Layout>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/reportTraining" element={<ReportTraining />} />

          <Route
            path="/training"
            element={
              <>
                <SignedIn>
                  <Training />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <SignedIn>
                  <Profile />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </Layout>
    </ClerkProvider>
  )
}

export default ClerkProviderWithRoutes
