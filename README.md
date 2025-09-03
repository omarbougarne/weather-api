# Weather API React App

A simple React application using Vite that allows users to search for a city and view its current temperature using the [Open-Meteo](https://open-meteo.com/) API.

## Features

- Search for any city by name
- Fetches geolocation and current weather data
- Displays current temperature in Celsius
- Built with React 19 and Vite
- ESLint configured for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-api.git
   cd weather-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
  App.jsx           # Main React component
  App.css           # App styles
  main.jsx          # Entry point
  index.css         # Global styles
  api/
    weather.api.js  # API logic for geocoding and weather
  components/
    Input.jsx       # Input field component
  assets/           # Static assets
public/
  vite.svg          # Favicon
```

## License

MIT