import { useState } from "react";
import Card from "./components/card";
import { robots } from "./components/robot";
import SearchBar from "./components/searchbar";

function App() {
  const [searchField, setSearchField] = useState("");
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  ); 
 

  return (
    <div >
      <h1 className="lg:text-7xl font-sega text-3xl text-green-600 font-light md:text-5xl text-center p-4">RoboFriends</h1>
      <SearchBar onSearchChange={setSearchField}/>
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
    </div>
  );
}

export default App;
