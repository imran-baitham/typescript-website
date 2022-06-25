import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import { Button } from "./components/Button";
import { Continer } from "./components/Continer";
import Logined from "./components/state/Logined";

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
    <div className="h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Greet name="imran baitham" messageCount={20} isLogIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="sucess" />
      <Heading>Hello Children conponent</Heading>
      <ul className="list-disc list-inside">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
      {/* <Button
        handleClick={(event, id) => {
          console.log("click", event, id);
        }}
      /> */}
      {/* <Button
        border="2px solid black"
        color="pink"
        height="30px"
        onClick={() => alert("You clicked on the pink circle!")}
        radius="0%"
        width="110px"
        children="I'm button!"
      /> */}
      {/* <Button
        onClick={() => alert("Button 1 is clicked !")}
        variant="info"
        size="sm"
      >
        Info
      </Button> */}
      <Button xl className="text-slate-50 bg-orange-400" disabled={true}>
        Hello
      </Button>
      <Continer styles={{ border: "1px solid red", padding: "1rem" }} />
      <Logined />
    </div>
  );
}

export default App;
