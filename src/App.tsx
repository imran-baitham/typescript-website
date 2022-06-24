import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "imran",
    last: "baitham",
  };
  const nameList = [
    {
      firstName: "irfan",
      lastName: "baitham",
    },
    {
      firstName: "imran",
      lastName: "baitham",
    },
    {
      firstName: "salman",
      lastName: "baitham",
    },
  ];
  return (
    <div className="App">
      <Greet name="imran baitham" messageCount={20} isLogIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="sucess" />
      <Heading>Hello Children conponent</Heading>
      <Button/>
    </div>
  );
}

export default App;
