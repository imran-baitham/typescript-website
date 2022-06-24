type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function App(props: PersonProps) {
  return (
    <h1>
      {props.name.first} {props.name.last}
    </h1>
  );
}

export default App;
