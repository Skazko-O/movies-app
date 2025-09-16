import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import DetailPage from './pages/DetailPage.jsx'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'



function App() {
  return (
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/detail/:media_type/:id" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;