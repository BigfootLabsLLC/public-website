export default function WADriverTest() {
  const screenshots = [
    "mainscreen.png",
    "practice_quiz_start.png",
    "mock-exam-question.png",
    "practice-quiz-answer.png",
    "mock_exam.png"
  ];

  // Helper for image paths
  const getImgPath = (name) => {
    // If running in dev/preview with base='./', this ensures we point to the public folder correctly relative to the index.html
    // HashRouter means we are always at '/', so 'img/...' works.
    return `img/products/wa-driver-test/${name}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* Product Hero */}
      <div className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 opacity-50"></div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50">
                iOS (iPad & iPhone)
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                Master the Road <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  with Confidence
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A comprehensive, adaptive learning system designed to help new drivers master the rules of the road in their native language.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    700+
                  </div>
                  <span>Curated Questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400">
                    5+
                  </div>
                  <span>Languages Supported</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Device Frame - iPad Style */}
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="relative border-slate-800 bg-slate-950 border-[12px] rounded-[2rem] h-[540px] w-[400px] shadow-2xl shadow-blue-900/40 max-w-full overflow-hidden">
                <div className="h-full w-full bg-slate-800">
                  <img src={getImgPath("mainscreen.png")} className="w-full h-full object-cover" alt="App Main Screen" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why this app is different</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We analyzed the official Washington Driver Guide and built a system that teaches mastery, not just memorization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🧠"
              title="Adaptive Learning"
              desc="The app remembers what you get wrong and surfaces those questions more frequently using a high-performance C++ spaced-repetition core."
            />
            <FeatureCard 
              icon="🌍"
              title="Multilingual Support"
              desc="Built for Washington's diverse population. Full support for Spanish, Chinese, Vietnamese, Russian, and Korean translations."
            />
            <FeatureCard 
              icon="📚"
              title="700+ Question Bank"
              desc="Extensive, AI-refined question library covering every detail of the official WA Driver Guide and road signs."
            />
            <FeatureCard 
              icon="📝"
              title="Mock Exams"
              desc="Simulates the real 40-question WA State Knowledge Test with weighted topic distribution and instant feedback."
            />
            <FeatureCard 
              icon="📱"
              title="Native Experience"
              desc="A fluid, high-performance iOS app built with SwiftUI, featuring high-contrast text and accessible design."
            />
            <FeatureCard 
              icon="📊"
              title="Progress Insights"
              desc="Detailed analytics to track your progress and ensure you are ready before you head to the DMV."
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">App Gallery</h2>
          
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory">
            {screenshots.map((shot, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] md:w-[320px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <img 
                  src={getImgPath(shot)} 
                  alt={`Screenshot ${idx + 1}`} 
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to pass?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Coming soon to the App Store.
          </p>
          <button disabled className="btn-primary opacity-50 cursor-not-allowed">
            Download (Coming Soon)
          </button>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors shadow-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}