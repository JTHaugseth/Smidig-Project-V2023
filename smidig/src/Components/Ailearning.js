import React, { useState, useEffect, useRef } from "react";
import "../Assets/Styles/Ailearning.css";

const Ailearning = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [isWaitingResponse, setWaitingResponse] = useState(false); // New state
  const messagesEndRef = useRef(null);

  const handleButtonClick = (info) => {
    getMessages(info);
  };

  const getMessages = async (message) => {
    addMessageToChat(message, "user");
    setValue("");

    // Ruleset for AI
    const ruleset = "Follow these rules: \n" +
      "You're AI implemented in a streaming graphics website. \n" +
      "In the website you have the following tools: Home, My Packages and Store. \n" +
      "- In the home page you have a choose-scene-navbar, package window, package components window, edit elements window and a scene window. \n" +
      "In the choose-scene-navbar, you can view scenes you have customized, or add / deletes scenes you have made. \n" +
      "In the package window, all your packages from My Packages will show. You can then click one of your packages to open it in the package components window. \n" +
      "In you package components window you have all the components inside the chosen pack. You can add all of them or just the ones you want to the scene window. \n" +
      "In the edit elements window you can customize each component. Change colors, positions and so on.  \n" +
      "The scene window is your preview stream. You can also drag around and select components you want to edit in edit elements. You can also \n" +
      "CTRL+scroll to zoom in and out. You can hold SHIFT to select multiple components at once. \n" +
      "- When you are ready to go live, you can use your streaming software to add the window capture of the scene window as a source in your streaming setup\n" +
      "- In My Packages you can browse all the packages you own. You can filter the packages by Overlays, Sounds or Effects.\n" +
      "- In the store page you can browse and buy stream packages. These can be everything from stream overlays, sounds and effects you can put on your stream.\n" +
      "In the sidebar you have the following filters: Discover (Packages with good rating), Overlays, Sounds, Effects, and items that are free.\n" +
      "You also have a search bar which you can search for packages with.\n" +
      "To see more information about a package, click on the package.\n" +
      "- If the user asks you something that doesnt correlate to the above information your answer should be: 'I'm sorry, but I'm only able to provide information and assistance related to the streaming graphics website. Please feel free to ask me anything about the Home, My Packages, or Store pages, or click on of the premade options in the sidebar!'\n" +
      "This is the user-prompt:\n";

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: ruleset + message }),
      };
  
      setValue("");
      setWaitingResponse(true); // Start waiting
  
      try {
        const response = await fetch("http://localhost:5233/api/completions", requestOptions);
        const data = await response.json();
        console.log(data);
        setMessage(data.choices[0].message);
        setWaitingResponse(false); // Stop waiting
      } catch (error) {
        console.error(error);
        setWaitingResponse(false); // Stop waiting
      }
    };

  const addMessageToChat = (messageContent, role) => {
    setPreviousChats((prevChats) => [
      ...prevChats,
      { role: role, content: messageContent },
    ]);
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (message) {
      addMessageToChat(message.content, "AI");
    }
  }, [message]);

  useEffect(() => {
    scrollToBottom();
  }, [previousChats]);

  return (
    <div className="app">
      <section className="side-bar">
        <h1>Information</h1>
        <p>Tell me more about:</p>
        <button onClick={() => handleButtonClick("Tell me more about Home")}>Home</button>
        <button onClick={() => handleButtonClick("Tell me more about My Packages")}>My Packages</button>
        <button onClick={() => handleButtonClick("Tell me more about Store")}>Store</button>
        <button onClick={() => handleButtonClick("Tell me more about exporting my scenes to my streaming software")}>Exporting Scenes</button>
      </section>
      <section className="main">
        <h1>AI Assistant</h1>
        <ul className="feed">
          {previousChats?.map((chatMessage, index) => (
            <li key={index}>
              <p className="role">{chatMessage.role}</p>
              <p>{chatMessage.content}</p>
            </li>
          ))}
          {isWaitingResponse && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={() => { getMessages(value); setValue('') }}>
              ➢
            </div>
          </div>
          <p className="info">
            StreamDream AI Assistant Version 1.0.0 --- 12/06/2023
          </p>
        </div>
      </section>
    </div>
  );
};

const TypingIndicator = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots(dots => dots.length < 4 ? dots + '.' : '.');
    }, 250);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <li>
      <p className="role">AI</p>
      <p>{dots}</p>
    </li>
  );
}

export default Ailearning;