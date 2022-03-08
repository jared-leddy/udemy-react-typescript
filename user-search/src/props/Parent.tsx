import { ChildFunction } from "./Child";

function clickMe() {
  console.log("button clicked");
}

const Parent = () => {
  return (
    <ChildFunction color="red" onClick={clickMe}>
      {" "}
    </ChildFunction>
  );
};
export default Parent;
