import { QueryClient, QueryClientProvider } from 'react-query'
import ClerkProviderWithRoutes from './providers/ClerkProviderWithRoutes'
import UserProvider from './providers/UserProvider'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ClerkProviderWithRoutes />
      </UserProvider>
    </QueryClientProvider>
  )
}

export default App
