type namesProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

const PersonList = (props: namesProps) => {
  return (
    <div className="text-xs">
      {props.names.map((name) => {
        return (
          <h1 key={name.firstName}>
            {name.firstName}
            {name.lastName}
          </h1>
        );
      })}
    </div>
  );
};

export default PersonList;
