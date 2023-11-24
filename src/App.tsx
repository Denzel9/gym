import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Main from './pages/Main'
import Training from './pages/Training'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/calendar" element={<Main />} />
        <Route path="/training" element={<Training />} />
        <Route path="profile" element={<Main />} />
      </Routes>
    </Layout>
  )
}

export default App
