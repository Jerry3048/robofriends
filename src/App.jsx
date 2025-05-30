import ErrorBoundary from "./components/error";
import { useState, useEffect } from "react";
import Card from "./components/card";
import SearchBar from "./components/searchbar";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const users = await response.json();
        setRobots(users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRobots();
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      <div className="bg-gradient-to-r from-lime-700 to-black fixed top-0 left-0 w-full z-10">
        <h1 className="lg:text-7xl font-sega text-3xl text-green-600 font-light md:text-5xl text-center p-4">
          RoboFriends 
        </h1>
        <SearchBar onSearchChange={setSearchField} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40 mt-100">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-lime-500"></div>
        </div>
       ) : error ? (
        <div className="text-center text-red-500 mt-[200px]">{error}</div>  
      ) : (
        <ErrorBoundary>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4 mt-[200px]">
            {filteredRobots.map((robot) => (
              <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
              />
            ))}
          </div>
        </ErrorBoundary>
      )}
    </div>
  );
}

export default App;
