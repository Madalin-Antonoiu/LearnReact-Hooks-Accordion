import axios from "axios";
import React, { useState, useEffect } from "react";

export default ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // useEffect Cleanup function
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        //destructured, instead of const respons, then having to call response.data
        "https://translation.googleapis.com/language/translate/v2",
        {}, // we dont want to send anything in the body

        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA"
          }
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    // Even if you change language before typing, we wont do a request
    if (debouncedText) {
      doTranslation();
    }
  }, [language, debouncedText]); // Anytime we get new language or text, we run the useEffect function

  return (
    <div>
      <hr />
      <h3 className="header">Output</h3>
      {translated}
    </div>
  );
};
