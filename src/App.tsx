import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import {
  Home,
  About,
  Features,
  Pricing,
  Contact,
  Privacy,
  Terms,
  DataDeletion,
  Cookies,
  Blog,
  Reels,
  GetStarted
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Standalone landing page (no main nav for focused conversion) */}
        <Route path="/get-started" element={<GetStarted />} />

        {/* Main site with standard layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reels" element={<Reels />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
