type Greeting = {
  name: string;
  messageCount?: number;
  isLogIn: boolean;
};
function App(props: Greeting) {
  return (
    <h1 className="App">
      {props.isLogIn
        ? `Hello World, i am ${props.name}, i am ${props.messageCount} year old.`
        : "Welcome Gest"}
    </h1>
  );
}

export default App;
