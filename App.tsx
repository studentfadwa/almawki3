import React, { useState } from 'react';
import { Prophet } from './types';
import { PROPHETS } from './constants';
import ProphetCard from './components/ProphetCard';
import StoryView from './components/StoryView';

const App: React.FC = () => {
  const [selectedProphet, setSelectedProphet] = useState<Prophet | null>(null);

  const handleSelectProphet = (prophet: Prophet) => {
    setSelectedProphet(prophet);
  };

  const handleBack = () => {
    setSelectedProphet(null);
  };
  
  return (
    <div 
      className="min-h-screen bg-amber-50 text-gray-800"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgb(253, 239, 213) 0%, rgb(253, 234, 202) 47.2%, rgb(250, 215, 161) 97.2%)
        `,
      }}
    >
      {!selectedProphet ? (
        <>
          <main className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-amber-900 drop-shadow-md">
                قصص الأنبياء للناشئة
              </h1>
              <p className="text-amber-800 mt-2 text-lg">
                اكتشف قصص الأنبياء بأسلوب ممتع ومبسط
              </p>
              <p className="text-amber-700 mt-1 text-sm">
                الفيديوهات تقديم الشيخ الدكتور ابراهيم بدوي
              </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
              {PROPHETS.map((prophet) => (
                <ProphetCard
                  key={prophet.id}
                  prophet={prophet}
                  onClick={() => handleSelectProphet(prophet)}
                />
              ))}
            </div>
          </main>
          <footer className="text-center py-6 text-amber-700/80">
            <p>
              rawafeedaleman.com - روافد الايمان
            </p>
          </footer>
        </>
      ) : (
        <StoryView 
          prophet={selectedProphet}
          onBack={handleBack} 
        />
      )}
    </div>
  );
};

export default App;