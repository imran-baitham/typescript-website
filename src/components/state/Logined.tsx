import { useState } from "react";
import { Button } from "../Button";

function Logined() {
  const [islogin, setislogin] = useState(false);
  const handlelogin = () => {
    setislogin(true);
  };
  const handlelogout = () => {
    setislogin(false);
  };
  return (
    <div>
      <div className="flex bg-slate-700">
        <Button xl onClick={handlelogin}>
          logIn
        </Button>
        <Button xl onClick={handlelogout}>
          logOut
        </Button>
      </div>
      <p>
        User is <b>{islogin ? "logIN" : "logOUT"}</b>
      </p>
    </div>
  );
}

export default Logined;
