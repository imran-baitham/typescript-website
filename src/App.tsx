import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Button } from "./components/Button";

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
    <div className="App bg-gray-800 text-white h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Greet name="imran baitham" messageCount={20} isLogIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="sucess" />
      <Heading>Hello Children conponent</Heading>
      {/* <Button
        handleClick={(event, id) => {
          console.log("click", event, id);
        }}
      /> */}
      <Button
        border="2px solid black"
        color="pink"
        height="30px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius="0%"
        width="110px"
        children="I'm button!"
      />
      {/* <Button
        onClick={() => alert("Button 1 is clicked !")}
        variant="info"
        size="sm"
      >
        Info
      </Button> */}
    </div>
  );
}

export default App;
