import { useState, useEffect  } from "react";
import Card from "./components/card";
import SearchBar from "./components/searchbar";

function App() {
  const [robots, setRobots] = useState([])
  const [searchField, setSearchField] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      setRobots(users);
      setLoading(false);
    })
  },[]);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  ); 

 

  return (
    <div >
      <h1 className="lg:text-7xl font-sega text-3xl text-green-600 font-light md:text-5xl text-center p-4">RoboFriends</h1>
      <SearchBar onSearchChange={setSearchField}/>
      {loading ? (
       <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-lime-500"></div>
        </div>
      ) : ( 
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {filteredRobots.map((robot) => (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        ))}
      </div>
      )}
    </div>
  );
}

export default App;
