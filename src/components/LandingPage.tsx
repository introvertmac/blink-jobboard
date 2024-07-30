import React from 'react';
import Link from 'next/link';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 animate-fadeInUp">
          Blink Job Board
        </h1>
        <p className="text-xl sm:text-2xl text-center mb-8 max-w-2xl">
          Revolutionize your hiring process. </p> <p className="text-l sm:text-xl text-center mb-8 max-w-xl"> Start accepting applications through Blink Job Board and connect with top talent in the Solana ecosystem.
        </p>

      </main>
      <footer className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-t">
        <Link href="https://x.com/0x7manish" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
          Follow on X
        </Link>
      </footer>
    </div>
  );
};

export default LandingPage;