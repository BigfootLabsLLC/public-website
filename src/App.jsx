import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WADriverTest from './pages/wa-driver-test/Page';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="bg-slate-900 text-white border-b border-slate-800">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link to="/" className="font-bold text-xl flex items-center gap-2">
              Bigfoot Labs
            </Link>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              {/* Add more links here later */}
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/wa-driver-test" element={<WADriverTest />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Bigfoot Labs LLC. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
