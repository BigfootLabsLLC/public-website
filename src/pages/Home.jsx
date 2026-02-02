import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-40 lg:pt-48 lg:pb-56">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 -z-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-sm font-medium mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            Building the next generation of tools
          </div>
          
          <img 
            src="/img/logo_white_background.png" 
            alt="Bigfoot Labs" 
            className="h-24 mx-auto mb-8 opacity-90 drop-shadow-2xl hidden" 
          />
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
            Bigfoot Labs
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Forging high-performance software with a focus on family connection and technical excellence.
          </p>
          
          <div className="flex justify-center gap-4">
            <a href="#products" className="btn-primary">
              View Products
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 border-b border-slate-800 pb-4">
            <h2 className="text-3xl font-bold">Featured Products</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Product Card: WA Driver Test */}
            <Link to="/products/wa-driver-test" className="group block">
              <div className="h-full bg-slate-900 rounded-2xl overflow-hidden card-hover flex flex-col">
                <div className="relative h-56 bg-slate-800 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors z-10"></div>
                  {/* Placeholder for App Icon/Shot - using a gradient or the actual mainscreen if suitable, but let's stick to a clean abstract or the screenshot */}
                  <img 
                    src="/public-website/img/products/wa-driver-test/mainscreen.png" 
                    onError={(e) => {e.target.onerror = null; e.target.src = ''}} // Fallback if image fails (e.g. dev mode)
                    alt="WA Driver App"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">iOS App</span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    WA License Test
                  </h3>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                    The parent-connected, data-driven driving coach. Master the rules of the road with AI-curated questions and adaptive learning.
                  </p>
                  <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more <span className="ml-2">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Placeholder for future products */}
            <div className="h-full bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-800 flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-slate-500 mb-2">Coming Soon</h3>
              <p className="text-slate-600">More exciting projects are in the works.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}