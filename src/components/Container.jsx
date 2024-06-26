import { useState } from "react";

import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  TWITTER_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    wordCount: text.split(/\s/).filter((word) => word !== "").length,
    facebookCharacterCount: FACEBOOK_MAX_CHARACTERS - text.length,
    twitterCharacterCount: TWITTER_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
