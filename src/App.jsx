export default function FulizaPesaWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-600">FulizaPesa</div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-600">Home</a>
            <a href="#loans" className="hover:text-emerald-600">Loans</a>
            <a href="#calculator" className="hover:text-emerald-600">Calculator</a>
            <a href="#faq" className="hover:text-emerald-600">FAQ</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
          </nav>

          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl shadow">
            Apply Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-emerald-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Instant Mobile Loans Anytime, Anywhere in Kenya
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Get quick and secure digital loans sent directly to your M-Pesa account in minutes.
              No paperwork. No long queues.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg">
                Apply Now
              </button>

              <button className="border border-slate-300 hover:border-emerald-600 px-8 py-4 rounded-2xl font-semibold">
                Check Eligibility
              </button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm border">
                <h3 className="text-3xl font-bold text-emerald-600">5M+</h3>
                <p className="text-sm text-slate-500 mt-1">Loans Processed</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border">
                <h3 className="text-3xl font-bold text-emerald-600">2 Min</h3>
                <p className="text-sm text-slate-500 mt-1">Approval Time</p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm border">
                <h3 className="text-3xl font-bold text-emerald-600">24/7</h3>
                <p className="text-sm text-slate-500 mt-1">Availability</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-900 rounded-[40px] p-4 shadow-2xl w-[320px]">
              <div className="bg-white rounded-[32px] overflow-hidden">
                <div className="bg-emerald-600 text-white p-6">
                  <h2 className="text-xl font-bold">FulizaPesa Wallet</h2>
                  <p className="text-sm mt-1 opacity-90">Available Loan Limit</p>
                  <h1 className="text-4xl font-extrabold mt-3">KES 45,000</h1>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-slate-100 rounded-2xl p-4">
                    <p className="text-sm text-slate-500">Next Repayment</p>
                    <h3 className="font-bold text-lg">KES 7,500</h3>
                  </div>

                  <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-semibold">
                    Request Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="loans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose FulizaPesa?</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Designed for modern Kenyans who need reliable and instant mobile financing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Fast Loan Approval",
              "Secure Transactions",
              "Flexible Repayment",
              "Low Interest Rates",
              "24/7 Availability",
              "No Paperwork",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-50 border rounded-3xl p-8 hover:shadow-xl transition"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl mb-5 flex items-center justify-center text-2xl">
                  💰
                </div>
                <h3 className="text-xl font-semibold">{feature}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  Enjoy seamless and secure borrowing experiences optimized for mobile users in Kenya.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section id="calculator" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl p-10 border">
            <h2 className="text-4xl font-bold text-center">Loan Calculator</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <label className="block text-sm font-medium mb-2">Loan Amount</label>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  className="w-full"
                />
                <p className="mt-2 text-emerald-600 font-bold">KES 50,000</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Repayment Period</label>
                <input
                  type="range"
                  min="7"
                  max="365"
                  className="w-full"
                />
                <p className="mt-2 text-emerald-600 font-bold">90 Days</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-slate-100 rounded-2xl p-6 text-center">
                <p className="text-sm text-slate-500">Interest</p>
                <h3 className="text-2xl font-bold mt-2">KES 4,500</h3>
              </div>

              <div className="bg-slate-100 rounded-2xl p-6 text-center">
                <p className="text-sm text-slate-500">Processing Fee</p>
                <h3 className="text-2xl font-bold mt-2">KES 500</h3>
              </div>

              <div className="bg-emerald-600 text-white rounded-2xl p-6 text-center">
                <p className="text-sm opacity-90">Total Repayment</p>
                <h3 className="text-2xl font-bold mt-2">KES 55,000</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Register Account",
              "Verify Identity",
              "Apply for Loan",
              "Receive Money on M-Pesa",
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">What Kenyans Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Brian Mwangi",
                text: "FulizaPesa helped me restock my biashara quickly.",
              },
              {
                name: "Sharon Achieng",
                text: "Loan approval was super fast and easy.",
              },
              {
                name: "Kevin Otieno",
                text: "Best mobile loan app I have used in Kenya.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm border">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100"></div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-yellow-500">★★★★★</p>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-relaxed">
                  “{testimonial.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              "How long does approval take?",
              "What is the maximum loan limit?",
              "Are my details secure?",
              "What happens if I pay late?",
            ].map((faq, index) => (
              <div key={index} className="border rounded-2xl p-6">
                <h3 className="font-semibold text-lg">{faq}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  FulizaPesa uses secure systems to ensure fast and safe digital lending experiences.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold leading-tight">
            Ready to Access Instant Loans?
          </h2>

          <p className="mt-6 text-lg opacity-90">
            Join thousands of Kenyans already using FulizaPesa.
          </p>

          <button className="mt-8 bg-white text-emerald-600 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-emerald-400">FulizaPesa</h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed">
              Trusted digital lending platform for modern Kenya.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li>About Us</li>
              <li>Loans</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li>Nairobi, Kenya</li>
              <li>support@fulizapesa.co.ke</li>
              <li>+254 700 000 000</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Legal</h3>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Loan Disclaimer</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-sm text-slate-500">
          © 2026 FulizaPesa. All rights reserved.
        </div>
      </footer>

      {/* Floating Button */}
      <button className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-full shadow-2xl font-semibold z-50">
        Apply Now
      </button>
    </div>
  );
}
