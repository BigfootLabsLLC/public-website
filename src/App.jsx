import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import WADriverTest from './pages/wa-driver-test/Page';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-200">
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Placeholder or SVG */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Bigfoot Labs
              </span>
            </Link>
            <div className="flex gap-8 font-medium">
              <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
              {/* <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link> */}
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/wa-driver-test" element={<WADriverTest />} />
          </Routes>
        </main>

        <footer className="bg-slate-950 border-t border-slate-900 py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-slate-600 text-sm">
              &copy; {new Date().getFullYear()} Bigfoot Labs LLC. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center gap-6">
               {/* Social links can go here */}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;