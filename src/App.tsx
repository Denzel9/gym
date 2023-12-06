import { QueryClient, QueryClientProvider } from 'react-query'
import ClerkProviderWithRoutes from './providers/ClerkProviderWithRoutes'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProviderWithRoutes />
    </QueryClientProvider>
  )
}

export default App
