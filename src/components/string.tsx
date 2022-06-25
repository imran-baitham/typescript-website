export function classNames(...classes: string[]) {
  return classes.filter((c) => typeof c === "string").join("");
}
