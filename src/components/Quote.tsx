import React from 'react';

interface QuoteProps {
  quote: string;
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <div className="quote">
      <p>{quote}</p>
    </div>
  );
};

export default Quote;
