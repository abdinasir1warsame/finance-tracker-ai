import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LucideBarChart2,
  LucideUpload,
  LucideTarget,
  LucideBrain,
  LucideLock,
  LucideArrowRight,
  LucideMenu,
  LucideX,
} from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-[#007BFF] font-bold text-2xl">FinanceAI</span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-[#007BFF] transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-[#007BFF] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-[#007BFF] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-[#007BFF] transition-colors"
            >
              Pricing
            </a>
            <Link
              to={'/onboarding'}
              className="bg-[#007BFF] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign Up Free
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-md p-4">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="text-gray-700 hover:text-[#007BFF] transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-[#007BFF] transition-colors py-2"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#007BFF] transition-colors py-2"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-[#007BFF] transition-colors py-2"
              >
                Pricing
              </a>
              <button className="bg-[#007BFF] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Sign Up Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="3xl:h-[90vh] 3xl:py-48 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Manage Your Finances with{' '}
              <span className="text-[#007BFF]">AI-Powered</span> Insights
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Track spending, set goals, and receive personalized
              recommendations to optimize your budget and save more effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={'/dashboard'}
                className="bg-[#007BFF] text-white px-8 py-3 rounded-md hover:bg-blue-600 transition-colors font-medium"
              >
                Get Started Free
              </Link>
              <button className="border border-[#007BFF] text-[#007BFF] px-8 py-3 rounded-md hover:bg-[#B3D8FF] hover:border-transparent transition-colors font-medium">
                See How It Works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#B3D8FF] rounded-lg p-6 shadow-lg">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Your Financial Summary
                </h3>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Monthly Spending</span>
                    <span className="font-medium">$2,450</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#007BFF] h-2.5 rounded-full"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Savings Goal</span>
                    <span className="font-medium">$500 / $1,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-[#34D399] h-2.5 rounded-full"
                      style={{ width: '50%' }}
                    ></div>
                  </div>
                </div>
                <div className="bg-[#F8F9FA] p-4 rounded-md border-l-4 border-[#007BFF]">
                  <p className="text-sm font-medium">
                    <span className="text-[#007BFF]">AI Insight:</span> You
                    spent 45% more on groceries this month. Cutting back could
                    save you $200.
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#34D399] rounded-full w-24 h-24 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="font-bold text-xl">85%</div>
                <div className="text-xs">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform helps you take control of your finances
              with smart insights and easy-to-use tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideBrain size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                AI-Powered Insights
              </h3>
              <p className="text-gray-600">
                Receive personalized recommendations based on your spending
                habits to help you save more effectively.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideUpload size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Bank Integration & PDF Upload
              </h3>
              <p className="text-gray-600">
                Connect your bank accounts via Plaid or upload statements to
                automatically track your transactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideBarChart2 size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spending Breakdown</h3>
              <p className="text-gray-600">
                Visualize your spending habits across categories with
                interactive charts and actionable insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideTarget size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Savings Goals</h3>
              <p className="text-gray-600">
                Set specific savings targets and track your progress with
                personalized recommendations to reach them faster.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideArrowRight size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Actionable Recommendations
              </h3>
              <p className="text-gray-600">
                Get specific tips to reduce overspending and increase savings
                based on your unique financial situation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#B3D8FF] p-3 rounded-full inline-block mb-4">
                <LucideLock size={24} className="text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Experience</h3>
              <p className="text-gray-600">
                Bank-level security ensures your financial data remains private
                and protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Getting started with FinanceAI is simple. Follow these steps to
              take control of your finances.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-[#B3D8FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#007BFF] font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Connect Your Accounts
              </h3>
              <p className="text-gray-600">
                Link your bank accounts via Plaid or upload PDF statements to
                import your financial data.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-[#B3D8FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#007BFF] font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your spending patterns and identifies
                opportunities to save and optimize your budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-[#B3D8FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#007BFF] font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Take Action & Save</h3>
              <p className="text-gray-600">
                Follow personalized recommendations, set goals, and track your
                progress to improve your financial health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 bg-white px-6 md:px-12 lg:px-24"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of people have improved their financial health with
              FinanceAI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#B3D8FF] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#007BFF] font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-500">Marketing Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "FinanceAI helped me identify that I was spending too much on
                subscriptions. I saved over $150 per month by cutting
                unnecessary services!"
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#B3D8FF] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#007BFF] font-bold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The AI insights are incredibly accurate. It noticed my dining
                out expenses were increasing and suggested alternatives that
                helped me save for my vacation."
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#B3D8FF] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#007BFF] font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've tried many finance apps, but FinanceAI is different. The
                PDF upload feature is perfect for tracking my business expenses
                without linking accounts."
              </p>
              <div className="flex mt-4">
                <span className="text-yellow-400">★★★★☆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your financial needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Manual transaction entry</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Basic spending insights</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>1 savings goal</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#007BFF] text-[#007BFF] rounded-md hover:bg-[#B3D8FF] hover:border-transparent transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#007BFF] relative transform scale-105">
              <div className="absolute top-0 right-0 bg-[#007BFF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">
                For serious financial planning
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Bank account integration</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>PDF statement upload</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Advanced AI insights</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Unlimited savings goals</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 bg-[#007BFF] text-white rounded-md hover:bg-blue-600 transition-colors">
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Business Plan */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <p className="text-gray-600 mb-6">For small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Business expense categorization</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Tax optimization insights</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-[#34D399] mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-[#007BFF] text-[#007BFF] rounded-md hover:bg-[#B3D8FF] hover:border-transparent transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#007BFF] text-white px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users who are saving more and spending smarter
            with FinanceAI.
          </p>
          <button className="bg-white text-[#007BFF] px-8 py-3 rounded-md hover:bg-[#B3D8FF] transition-colors font-medium text-lg">
            Get Started Free
          </button>
          <p className="mt-4 text-sm opacity-80">
            No credit card required. Free 14-day trial on premium features.
          </p>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-gray-800 text-white py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FinanceAI</h3>
              <p className="text-gray-400">
                AI-powered personal finance management to help you save more and
                spend smarter.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API Docs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2023 FinanceAI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
