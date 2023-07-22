/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

// 1) create context
const CitiesContext = createContext();

// 2) make provider to pass child component

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(`Error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error('Cities Context was used outside the CitiesProvider');
    return context;
}

export { CitiesProvider, useCities };
