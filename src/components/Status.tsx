type statusProps = {
  status: "loading" | "sucess" | "error";
};
function Status(props: statusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "sucess") {
    message = "Data fetched sucessfully!";
  } else if (props.status === "error") {
    message = "Error fetching Data";
  }

  return <div>Status - {message}</div>;
}

export default Status;
