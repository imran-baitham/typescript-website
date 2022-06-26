import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PraviteProps = {
  isLoggedIN: boolean;
  component: React.ComponentType<ProfileProps>;
};

export function Pravite({ isLoggedIN, component: Component }: PraviteProps) {
  if (isLoggedIN) {
    return <Component name="imran baitham" />;
  } else {
    return <Login />;
  }
}
