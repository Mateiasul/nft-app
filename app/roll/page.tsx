"use client";
export default function Roll() {
  const randomRoll = () => {
    const rand = Math.floor(Math.random() * 6 + 1);
    console.log(rand, "rand");
  };

  return (
    <div>
      <button onClick={randomRoll}>Roll</button>
    </div>
  );
}
