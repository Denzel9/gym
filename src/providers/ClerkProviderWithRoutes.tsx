import { FunctionComponent } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Main from '../pages/Main'
import ReportTraining from '../pages/ReportTraining'
import Training from '../pages/Training'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import Layout from '../components/layout/Layout'
import Calendar from '../pages/Calendar'
import Profile from '../pages/Profile'
import LastTraining from '../pages/LastTraining'
import Records from '../pages/Records'
import UserProvider from './UserProvider'

import CalendarProvider from './CalendarProvider'
import EditProfile from '../pages/EditProfile'

const ClerkProviderWithRoutes: FunctionComponent = () => {
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
  const navigate = useNavigate()
  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <UserProvider>
        <CalendarProvider>
          <Layout>
            <Routes>
              <Route path="/lasttraining" element={<LastTraining />} />
              <Route path="/records" element={<Records />} />
              <Route path="/main" element={<Main />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/reportTraining" element={<ReportTraining />} />
              <Route path="/editProfile" element={<EditProfile />} />

              <Route
                path="/training"
                element={
                  <>
                    <SignedIn>
                      <Training />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn redirectUrl={'/main'} />
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
                      <RedirectToSignIn redirectUrl={'/main'} />
                    </SignedOut>
                  </>
                }
              />
            </Routes>
          </Layout>
        </CalendarProvider>
      </UserProvider>
    </ClerkProvider>
  )
}

export default ClerkProviderWithRoutes
