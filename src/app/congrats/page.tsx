"use client";

import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import Link from 'next/link';

export default function Congrats() {
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={500}
        tweenDuration={10000}
      />
      <div className="w-full max-w-6xl bg-white p-6 sm:p-8 md:p-12 rounded-xl text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Congratulations! You are eligible for the following incentive programs:
        </h1>

        <div className="mb-12 text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">NYSERDA EmPower+ Program <span className="block text-lg font-medium text-gray-600">(No-Cost Energy Efficiency)</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">Free Assessment</h3>
              <p className="text-gray-600 mt-2">Free contractor visits to identify energy waste (drafts, poor insulation, etc.).</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">Utility Bill Savings</h3>
              <p className="text-gray-600 mt-2">Expected savings of up to 40% on utility bills</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">Free Upgrades / Installations</h3>
              <p className="text-gray-600 mt-2">Free installation of:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                <li>sealing drafts around windows & doors to keep cool air-in</li>
                <li>energy-efficient refrigerator</li>
                <li>energy-saving LED lightbulbs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">HEAP Cooling Assistance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">New AC Subsidy</h3>
              <p className="text-gray-600 mt-2">Up to $800 to cover the cost of a new, energy-efficient window or portable air conditioner.</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">Free Installation</h3>
              <p className="text-gray-600 mt-2">Fully covered removal of old AC unit and installation of new, energy-efficient AC</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Link
  href="https://climate-week.streamlit.app/"
  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
>
  <span className="px-4">Chat Now</span>
</Link>



      </div>
    </div>
  );
}
