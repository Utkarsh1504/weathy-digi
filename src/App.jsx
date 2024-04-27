import { useEffect, useState } from "react";
import Temperature from "./components/Temperature";
import DetailsCard from "./components/DetailsCard";

function App() {
  const [city, setCity] = useState("Lucknow");
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = () => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_API_KEY
    }&q=${city}&aqi=no;`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-start mt-8">
      <div className="w-half md:w-2/3 lg:w-2/5 h-auto lg:h-3/5 mt-8 lg:mt-40 border-none rounded-lg bg-zinc-600 pt-8 lg:pt-12 p-4 pb-2 ">
        {weatherData && (
          <Temperature
            fetchData={fetchData}
            setCity={setCity}
            stats={{
              temp: weatherData.current.temp_c,
              condition: weatherData.current.condition.text,
              isDay: weatherData.current.is_day,
              location: weatherData.location.name,
              time: weatherData.location.localtime,
            }}
          />
        )}
      </div>
      <div className="w-full lg:w-1/3 h-auto lg:h-1/3 mt-8 lg:mt-40 p-4 lg:p-10 grid grid-cols-2 gap-4 lg:gap-6">
        <h1 className="text-slate-200 text-xl text-center lg:text-2xl col-span-2">
          Weather Details
        </h1>
        {weatherData && (
          <>
            <DetailsCard
              stats={{
                title: "Wind Speed",
                value: weatherData.current.wind_mph,
                unit: "mph",
                direction: weatherData.current.wind_dir,
              }}
            />
            <DetailsCard
              stats={{
                title: "Humidity",
                value: weatherData.current.humidity,
                unit: "%",
              }}
            />
            <DetailsCard
              stats={{
                title: "Visibility",
                value: weatherData.current.vis_miles,
                unit: "miles",
              }}
            />
            <DetailsCard
              stats={{
                title: "Air Pressure",
                value: weatherData.current.pressure_mb,
                unit: "mb",
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
