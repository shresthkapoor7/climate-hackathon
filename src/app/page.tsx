"use client";

import { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState({
    'hero-products': 'Products',
    'hero-solutions': 'Solutions',
    'hero-resources': 'Resources',
    'hero-company': 'Company'
  });

  const [borough, setBorough] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const boroughRef = useRef<HTMLDivElement>(null);
  const [income, setIncome] = useState(50000);

  const nycBoroughts = [
    "Bronx",
    "Brooklyn",
    "Manhattan",
    "Queens",
    "Staten Island",
  ];

  const handleBoroughChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBorough(value);
    if (value.length > 0) {
      const filteredSuggestions = nycBoroughts.filter((b) =>
        b.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setBorough(suggestion);
    setSuggestions([]);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    setOpenDropdown(null); // Close dropdowns after navigation
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/congrats');
  };

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const selectItem = (dropdownName: string, itemText: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [dropdownName]: itemText
    }));
    setOpenDropdown(null); // Close dropdown after selection
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    };

    if (openDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [openDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (boroughRef.current && !boroughRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    if (suggestions.length > 0) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [suggestions.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded text-white flex items-center justify-center font-semibold text-lg">
              cl
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/chat"
              className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Chat Now
            </Link>
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Check Eligibility
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
            <div className="space-y-3">
              <div className="pt-3 border-t border-gray-200 space-y-3">
                <a href="#" className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
                  Join Discord
                </a>
                <button className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Start for Free
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main id="home" className="max-w-4xl mx-auto px-6 py-20 text-center">

        {/* Main Heading */}
        <h1 className="text-5xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">

        Find Your Extreme Heat Relief
        </h1>

        <h2 className="text-2xl text-gray-700 mb-8">Check Your Eligibility for NYC Assistance Programs</h2>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          This initiative, proudly supported by NYSERDA, is dedicated to helping NYC residents effectively plan and prepare for the dangers of heatwaves. By inputting key criteria, you can quickly review your eligibility for a full range of cooling and energy incentive programs. These programs include state and federal funded initiatives like NYC EmPower+ and Cooling Assistance, as well as many other vital grants and rebates. A built-in chatbot is also available to help answer any additional questions you have related to your eligible incentives and next steps.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('how')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors min-w-140"
          >
            Check Eligibility
          </button>
          <Link
            href="/chat"
            className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Chat Now
          </Link>
        </div>
      </main>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* How Section */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Answer a few simple questions to quickly check your eligibility for various cooling and energy incentive programs.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1" onSubmit={handleFormSubmit}>
            {/* Question 1 */}
            <div className="space-y-3 relative" ref={boroughRef}>
              <label htmlFor="borough" className="block text-base font-medium text-gray-800 text-left">
                1. What NYC borough do you live in?
              </label>
              <input
                type="text"
                name="borough"
                id="borough"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="e.g., Brooklyn"
                value={borough}
                onChange={handleBoroughChange}
                autoComplete="off"
              />
              {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 shadow-lg">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <br />

            {/* Question 2 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="income" className="block text-base font-medium text-gray-800 text-left">
                2. What is your household income? <span className="font-bold text-blue-600">${income.toLocaleString()}</span>
              </label>
              <input
                type="range"
                name="income"
                id="income"
                min="0"
                max="200000"
                step="1000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            <br />


            {/* Question 3 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="residents" className="block text-base font-medium text-gray-800 text-left">
                3. What is the number of residents in your household?
              </label>
              <input
                type="number"
                name="residents"
                id="residents"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="e.g., 3"
              />
            </div>
            <br />

            {/* Question 4 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="rentOrOwn" className="block text-base font-medium text-gray-800 text-left">
                4. Do you rent or own your home?
              </label>
              <select
                id="rentOrOwn"
                name="rentOrOwn"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option>Rent</option>
                <option>Own</option>
              </select>
            </div>
            <br />

            {/* Question 5 */}

            {/* Question 6 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="under6Over60" className="block text-base font-medium text-gray-800 text-left">
                6. Are any members in your household under 6 or over 60?
              </label>
              <select
                id="under6Over60"
                name="under6Over60"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <br />


            {/* Question 7 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="medicalCondition" className="block text-base font-medium text-gray-800 text-left">
                7. Do any members in your household have a medical condition that&apos;s worsened by heat?
              </label>
              <select
                id="medicalCondition"
                name="medicalCondition"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <br />


            {/* Question 8 */}
            <div className="space-y-3 mt-8">
              <label htmlFor="acUnit" className="block text-base font-medium text-gray-800 text-left">
                8. Is your A/C unit not working or is it over 5 years old?
              </label>
              <select
                id="acUnit"
                name="acUnit"
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <br />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Check Eligibility
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
