import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChangeEvent = (e) => {
    let newText = e.target.value;
    //basic validation
    if (newText.includes("<script>")) {
      setWarningText("script tag");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("@ symbol");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea value={text} onChange={handleChangeEvent} />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
