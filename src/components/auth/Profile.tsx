export type ProfileProps = {
  name: string;
};

export function Profile({ name }: ProfileProps) {
  return <div>private profile component. Name is {name}</div>;
}
