import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>
    <Routers>
      <Route element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutePage />} />
      </Route>
    </Routers>
    </BrowserRouter> */}
    <App />
  </StrictMode>,
)
