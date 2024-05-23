import React, { useEffect, useState } from 'react';
import Quote from './components/Quote';

const App: React.FC = () => {
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    fetchQuote();
    setRandomBackgroundImage();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const setRandomBackgroundImage = () => {
    const images = [
      'url("/images/image1.avif")',
      'url("/images/image2.jpg")',
      'url("/images/image3.jpg")',
      'url("/images/image4.jpg")',
      'url("/images/image5.jpg")',
      'url("/images/image6.jpg")',
      'url("/images/image7.jpg")',
      'url("/images/image8.jpg")',
      'url("/images/image9.jpg")',
      'url("/images/image10.jpg")',
      'url("/images/image11.jpg")',
  
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = randomImage;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
  };

  return (
    <div className="app">
      <img src="/images/dailyQuotes.png" alt="Daily Quotes" className="daily-quotes-image" />
      <Quote quote={quote} />
      <button onClick={() => { fetchQuote(); setRandomBackgroundImage(); }}>Generate New Quote</button>

    </div>
  );
};

export default App;