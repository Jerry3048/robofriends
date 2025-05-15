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
    <div>
      <SearchBar onSearchChange={setSearchField}/>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-5 p-4 ">
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
