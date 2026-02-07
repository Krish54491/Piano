import { useEffect } from "react";

function Piano() {
  // code to show the piano and play notes when keys are pressed
  useEffect(() => {
    // add event listeners for key presses and play notes
  }, []);
  return <></>;
}
export function Horse({ setGameMode }) {
  return (
    <>
      <button onClick={() => setGameMode("menu")}>Back to Menu</button>
      <Piano />
    </>
  );
}
