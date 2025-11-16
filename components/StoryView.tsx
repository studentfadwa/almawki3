import React, { useState } from 'react';
import { Prophet } from '../types';

interface StoryViewProps {
  prophet: Prophet;
  onBack: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ prophet, onBack }) => {
  const [viewMode, setViewMode] = useState<'split' | 'video' | 'reading'>('split');
  const story = prophet.story;

  const getButtonClass = (mode: 'split' | 'video' | 'reading') => {
    return `p-2 rounded-lg transition-colors duration-300 ${
      viewMode === mode ? 'bg-amber-700 text-white' : 'bg-amber-200 text-amber-800 hover:bg-amber-300'
    }`;
  };

  return (
    <div className="w-screen h-screen p-4 md:p-8 animate-fade-in">
      <div className="h-full bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-amber-200 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-amber-200 flex-wrap gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900">{prophet.name}</h2>
          
          <div className="flex items-center gap-2">
            {/* View Mode Toggles */}
            <button onClick={() => setViewMode('reading')} className={getButtonClass('reading')} title="وضع القراءة">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </button>
            <button onClick={() => setViewMode('video')} className={getButtonClass('video')} title="وضع الفيديو">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </button>
             <button onClick={() => setViewMode('split')} className={getButtonClass('split')} title="تقسيم الشاشة">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
            </button>

            <div className="w-px h-8 bg-amber-300 mx-2"></div>

            <button
              onClick={onBack}
              className="bg-amber-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors duration-300 flex items-center gap-2"
            >
              <span>رجوع</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 110-2h7.586l-4.293-4.293a1 1 0 011.414-1.414l6 6a1 1 0 010 1.414l-6 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col min-h-0">
          {/* Top Pane: AI Generated Story */}
          <div className={`overflow-y-auto transition-all duration-500 ease-in-out ${
            viewMode === 'video' ? 'flex-none h-0 p-0' :
            viewMode === 'reading' ? 'flex-1 p-6' :
            'flex-[0.8] p-6'
          }`}>
            <div className="prose prose-lg max-w-none text-amber-900 leading-relaxed whitespace-pre-wrap">
              {story.split('\n\n').map((paragraph, index) => {
                if (index === 0) {
                  return <p key={index} className="text-2xl font-bold">{paragraph.replace(/\*\*/g, '')}</p>
                }
                return <p key={index}>{paragraph}</p>
              })}
            </div>
          </div>
          
          {/* Divider */}
          <div className={`border-t-4 border-amber-200 border-dashed transition-all duration-500 ease-in-out ${viewMode !== 'split' ? 'hidden' : ''}`}></div>

          {/* Bottom Pane: Website Iframe */}
          <div className={`flex flex-col transition-all duration-500 ease-in-out ${
             viewMode === 'reading' ? 'flex-none h-0 p-0' :
             viewMode === 'video' ? 'flex-1 p-6' :
             'flex-[1.2] p-6'
          }`}>
            <div className={`flex-grow rounded-lg overflow-hidden shadow-inner border border-amber-200 transition-opacity duration-500 ${
                viewMode === 'reading' ? 'opacity-0' : 'opacity-100'
            }`}>
              <iframe
                className="w-full"
                style={{ height: 'calc(100% + 140px)', marginTop: '-140px' }}
                src={prophet.url}
                title={`الموقع الأصلي لقصة ${prophet.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryView;