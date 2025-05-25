import React from 'react';

interface SuggestionListProps {
  suggestions: string[];
  inputText: string;
  onSelectSuggestion: (suggestion: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({ 
  suggestions, 
  inputText, 
  onSelectSuggestion 
}) => {
  const highlightMatch = (suggestion: string) => {
    const index = suggestion.toLowerCase().indexOf(inputText.toLowerCase());
    if (index === -1) return <span>{suggestion}</span>;
    
    return (
      <>
        <span className="text-gray-400">{suggestion.substring(0, index)}</span>
        <span className="font-semibold">{suggestion.substring(index, index + inputText.length)}</span>
        <span>{suggestion.substring(index + inputText.length)}</span>
      </>
    );
  };

  return (
    <div className="absolute z-10 w-full mt-1 bg-black border border-gray-700 rounded-md shadow-lg max-h-60 overflow-auto">
      <ul className="py-1">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-150"
            onClick={() => onSelectSuggestion(suggestion)}
          >
            {highlightMatch(suggestion)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;