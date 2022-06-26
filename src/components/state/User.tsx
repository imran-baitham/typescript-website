import { useState } from "react";
import { Button } from "../Button";

type userProps = {
  name: "imran baitham";
  email: "imranbaitham001@gmail.com";
};

function UserLogs() {
  const [islogin, setislogin] = useState<userProps | null>(null);
  const handlelogin = () => {
    setislogin({
      name: "imran baitham",
      email: "imranbaitham001@gmail.com",
    });
  };
  const handlelogout = () => {
    setislogin(null);
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
      <div>
        <h2>user Name = {islogin?.name}</h2>
        <h2>user Email = {islogin?.email}</h2>
      </div>
    </div>
  );
}

export default UserLogs;
