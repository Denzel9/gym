import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Main from './pages/Main'
import Training from './pages/Training'
import ReportTraining from './pages/ReportTraining'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/calendar" element={<Main />} />
        <Route path="/training" element={<Training />} />
        <Route path="/profile" element={<Main />} />
        <Route path="/reportTraining" element={<ReportTraining />} />
      </Routes>
    </Layout>
  )
}

export default App
