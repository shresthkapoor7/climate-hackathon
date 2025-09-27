"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState({
    'hero-products': 'Products',
    'hero-solutions': 'Solutions',
    'hero-resources': 'Resources',
    'hero-company': 'Company'
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
    setOpenDropdown(null); // Close dropdowns after navigation
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
    }
  }, [openDropdown]);

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

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => scrollToSection('home')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-900 hover:text-gray-700 hover:bg-gray-50 font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('how')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors">
              How
            </button>
            <button onClick={() => scrollToSection('docs')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors">
              Docs
            </button>
            <button onClick={() => scrollToSection('pricing')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors">
              Pricing
            </button>
            <button onClick={() => scrollToSection('manifesto')} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors">
              Manifesto
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="/chat"
              className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Chat Now
            </Link>
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start for Free
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
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-900 hover:bg-gray-50 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('how')} className="block w-full text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                How
              </button>
              <button onClick={() => scrollToSection('docs')} className="block w-full text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                Docs
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('manifesto')} className="block w-full text-left px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
                Manifesto
              </button>
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
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          Context augmentation
          <br />
          for agents.
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Nia is a context-augmentation layer for agents, primarily designed for coding agents. It
          provides them with an up-to-date knowledge base and improves their performance by 27%.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors min-w-140">
            Start for Free
          </button>
          <button className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
            Arlan installation
            <span className="text-gray-500 text-sm">⌘ K</span>
          </button>
        </div>

        {/* Dropdown Menus */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('hero-products')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors flex items-center justify-between"
            >
              <span>{selectedItems['hero-products']}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${openDropdown === 'hero-products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'hero-products' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button onClick={() => selectItem('hero-products', 'Climate Analytics')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Climate Analytics</button>
                  <button onClick={() => selectItem('hero-products', 'Carbon Tracking')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Carbon Tracking</button>
                  <button onClick={() => selectItem('hero-products', 'Sustainability Reports')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Sustainability Reports</button>
                  <button onClick={() => selectItem('hero-products', 'Green Investments')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Green Investments</button>
                </div>
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('hero-solutions')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors flex items-center justify-between"
            >
              <span>{selectedItems['hero-solutions']}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${openDropdown === 'hero-solutions' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'hero-solutions' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button onClick={() => selectItem('hero-solutions', 'For Enterprises')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">For Enterprises</button>
                  <button onClick={() => selectItem('hero-solutions', 'For Startups')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">For Startups</button>
                  <button onClick={() => selectItem('hero-solutions', 'For Government')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">For Government</button>
                  <button onClick={() => selectItem('hero-solutions', 'For NGOs')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">For NGOs</button>
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('hero-resources')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors flex items-center justify-between"
            >
              <span>{selectedItems['hero-resources']}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${openDropdown === 'hero-resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'hero-resources' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button onClick={() => selectItem('hero-resources', 'Documentation')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Documentation</button>
                  <button onClick={() => selectItem('hero-resources', 'Blog')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Blog</button>
                  <button onClick={() => selectItem('hero-resources', 'Research Papers')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Research Papers</button>
                  <button onClick={() => selectItem('hero-resources', 'Case Studies')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Case Studies</button>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('hero-company')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-medium transition-colors flex items-center justify-between"
            >
              <span>{selectedItems['hero-company']}</span>
              <svg className={`w-4 h-4 text-gray-400 transition-transform ${openDropdown === 'hero-company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openDropdown === 'hero-company' && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  <button onClick={() => selectItem('hero-company', 'About Us')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">About Us</button>
                  <button onClick={() => selectItem('hero-company', 'Our Team')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Our Team</button>
                  <button onClick={() => selectItem('hero-company', 'Careers')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Careers</button>
                  <button onClick={() => selectItem('hero-company', 'Contact')} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50">Contact</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Demo indicator */}
        <div className="text-gray-400 text-sm mb-8">
          ⌘ J to see the latest demo
        </div>
      </main>



      {/* How Section */}
      <section id="how" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nia seamlessly integrates with your existing workflow to provide real-time context and intelligence to your coding agents.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Connect</h3>
            <p className="text-gray-600">Easily integrate Nia with your development environment and existing tools.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyze</h3>
            <p className="text-gray-600">Our AI analyzes your codebase and provides contextual insights to your agents.</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimize</h3>
            <p className="text-gray-600">Watch your agent performance improve by 27% with enhanced context awareness.</p>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Documentation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to get started with Nia, from quick start guides to advanced configuration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Start</h3>
            <p className="text-gray-600 mb-4">Get up and running with Nia in under 5 minutes.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">API Reference</h3>
            <p className="text-gray-600 mb-4">Complete documentation of all Nia APIs and endpoints.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrations</h3>
            <p className="text-gray-600 mb-4">Learn how to integrate Nia with popular development tools.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>
            <p className="text-gray-600 mb-4">Tips and tricks to get the most out of Nia.</p>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read more →</a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your team. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Free</h3>
            <div className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-lg text-gray-600">/month</span></div>
            <ul className="text-gray-600 mb-8 space-y-3">
              <li>✓ Up to 3 agents</li>
              <li>✓ Basic context augmentation</li>
              <li>✓ Community support</li>
              <li>✓ 1GB storage</li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white border-2 border-blue-600 rounded-lg p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Pro</h3>
            <div className="text-4xl font-bold text-gray-900 mb-6">$29<span className="text-lg text-gray-600">/month</span></div>
            <ul className="text-gray-600 mb-8 space-y-3">
              <li>✓ Unlimited agents</li>
              <li>✓ Advanced context augmentation</li>
              <li>✓ Priority support</li>
              <li>✓ 100GB storage</li>
              <li>✓ Advanced analytics</li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-gray-900 mb-6">Custom</div>
            <ul className="text-gray-600 mb-8 space-y-3">
              <li>✓ Everything in Pro</li>
              <li>✓ Custom integrations</li>
              <li>✓ Dedicated support</li>
              <li>✓ Unlimited storage</li>
              <li>✓ SLA guarantee</li>
            </ul>
            <button className="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Manifesto</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in empowering developers with intelligent tools that enhance creativity and productivity.
          </p>
        </div>

        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="text-lg leading-relaxed mb-6">
            In a world where code complexity is ever-increasing, developers need more than just tools—they need
            intelligent partners that understand context, anticipate needs, and amplify human creativity.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Nia represents our commitment to this vision. We're not just building another development tool;
            we're crafting an intelligent layer that makes every interaction between humans and code more
            meaningful, more productive, and more enjoyable.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <p className="text-lg font-medium text-blue-900 mb-2">
              "The best tools are invisible—they amplify human capability without getting in the way."
            </p>
            <p className="text-blue-700">— Nia Team</p>
          </div>

          <p className="text-lg leading-relaxed">
            Join us in reimagining what's possible when human intuition meets artificial intelligence in
            the realm of software development.
          </p>
        </div>
      </section>
    </div>
  );
}
