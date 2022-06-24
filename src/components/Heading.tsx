type HeadingChild = {
    children : string
}

function Heading(props: HeadingChild) {
  return (
    <div>
      <p className="bg-gray-400">{props.children}</p>
    </div>
  );
}

export default Heading;
