# Sentence Autocomplete

A minimalist web application that provides sentence autocompletion as you type, built with React and Tailwind CSS.

## Features

- **Real-time Suggestions**: Get intelligent sentence suggestions as you type
- **Minimalist Design**: Clean black and white interface for distraction-free writing
- **Responsive**: Works seamlessly on mobile, tablet, and desktop devices
- **Intuitive UI**: Simple and easy-to-use interface

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd sentence-autocomplete
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## Project Structure

```
/src
  /components         # UI components
    - LandingSection.tsx
    - AutocompleteSection.tsx
    - SuggestionList.tsx
  /services           # Service layer
    - suggestionService.ts
  - App.tsx           # Main application component
  - main.tsx          # Application entry point
  - index.css         # Global styles
```

## Technology Stack

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server

## Future Enhancements

- Voice input functionality
- Personalized suggestions based on user history
- Multiple language support
- Save favorite phrases