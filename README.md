## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Utkarsh1504/weathy-digi
   ```

2. Navigate to the project directory:

   ```bash
   cd weathy-digi
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create an account on [WeatherAPI](https://www.weatherapi.com/) for weather data and obtain an API key.

5. Create a `.env` file in the root directory of the project and add your API key:

   ```
   VITE_API_KEY=your-api-key
   ```

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open the application in your browser:

   ```
   http://localhost:5173
   ```

## Implemented Features:

- **Search Functionality**: Users can enter the name of a city to search for its current weather information.
- **Current Weather Details**: The application displays current weather details including temperature, humidity, and wind speed for the searched city.
- **Responsive Design**: The application is designed to be responsive and provides an optimal viewing experience across various devices and screen sizes.
