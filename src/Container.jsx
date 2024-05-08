import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    wordCount: text.split(/\s/).filter((word) => word !== "").length,
    facebookCharacterCount: 2200 - text.length,
    twitterCharacterCount: 280 - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
