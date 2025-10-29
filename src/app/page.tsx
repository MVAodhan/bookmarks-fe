import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Smart Bookmarks, Powered by AI
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Save, summarize, and tag your web pages—effortlessly.
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-white text-indigo-600 px-6 py-3 rounded font-bold hover:bg-gray-100"
            >
              Try BookmarkAI Now
            </a>
            <a
              href="#"
              className="border-2 border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-indigo-600"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Summaries",
                description:
                  "Get concise, accurate summaries of any webpage in seconds.",
              },
              {
                title: "Smart Tagging",
                description:
                  "AI automatically generates relevant tags for easy search and filtering.",
              },
              {
                title: "One-Click Saving",
                description:
                  "Save links with a single click—no clutter, no hassle.",
              },
              {
                title: "Cross-Platform Sync",
                description: "Access your bookmarks anywhere, on any device.",
              },
              {
                title: "Search & Filter",
                description:
                  "Find exactly what you need with powerful search and tag filters.",
              },
              {
                title: "Privacy-First",
                description: "Your data is yours—no ads, no tracking.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "1. Save",
                description:
                  "Bookmark any webpage with our browser extension or web app.",
              },
              {
                step: "2. Summarize",
                description:
                  "AI instantly generates a summary of the page’s key points.",
              },
              {
                step: "3. Tag",
                description:
                  "AI suggests relevant tags, or add your own for personalization.",
              },
              {
                step: "4. Find",
                description:
                  "Search, filter, or browse your bookmarks by tag, date, or keyword.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-indigo-600 mb-2">
                  {item.step}
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* Get Started Section */}
      <section
        id="get-started"
        className="py-16 bg-indigo-600 text-white text-center"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Get Started</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving time and staying organized
            with BookmarkAI.
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-white text-indigo-600 px-6 py-3 rounded font-bold hover:bg-gray-100"
            >
              Download the Browser Extension
            </a>
            <a
              href="#"
              className="border-2 border-white px-6 py-3 rounded font-bold hover:bg-white hover:text-indigo-600"
            >
              Sign Up for the Web App
            </a>
          </div>
          <div className="mt-12 text-sm">
            <p>For Developers:</p>
            <div className="space-x-4 mt-2">
              <a href="#" className="text-white hover:underline">
                GitHub Repository
              </a>
              <a href="#" className="text-white hover:underline">
                Contribute
              </a>
              <a href="#" className="text-white hover:underline">
                API Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              Discord
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              License
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 BookmarkAI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Page;
