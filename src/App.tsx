import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import { LangProvider } from './context/LangContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import BlogPost from './pages/BlogPost';
import Blog from './pages/Blog';
import Volunteer from './pages/Volunteer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </LangProvider>
  );
}
