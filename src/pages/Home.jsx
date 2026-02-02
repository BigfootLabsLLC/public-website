import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/img/logo_white_background.png" 
            alt="Bigfoot Labs Logo" 
            className="h-32 mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Bigfoot Labs</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Building software that leaves a mark.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Product Card: WA Driver Test */}
          <Link to="/products/wa-driver-test" className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-slate-100 h-full">
              <div className="h-48 bg-blue-500 flex items-center justify-center">
                <span className="text-white text-5xl">🚗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  WA Driver's License Test
                </h3>
                <p className="text-slate-600">
                  Ace your Washington State driver's permit test with our comprehensive study guide and practice exams.
                </p>
              </div>
            </div>
          </Link>

          {/* Placeholder for future products */}
          <div className="bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center h-full min-h-[300px]">
            <span className="text-slate-400 font-medium">More coming soon...</span>
          </div>

        </div>
      </section>
    </div>
  );
}
