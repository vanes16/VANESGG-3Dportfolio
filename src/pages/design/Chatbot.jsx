import React, { useState, useReducer, useEffect } from "react";
import "../style/style.css";

// Reducer function for message handling
const messageReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];
    case "CLEAR_MESSAGES":
      return [];
    default:
      return state;
  }
};

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, dispatch] = useReducer(messageReducer, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTime = () => {
    const date = new Date();
    return date.toLocaleTimeString();
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    if (!userInput) {
      setError("Please enter a message.");
      return;
    }

    // Add user message
    const newMessage = {
      text: userInput,
      side: "right",
      name: "You",
      img: "/images/user.jpg",
      time: getTime(),
    };

    dispatch({ type: "ADD_MESSAGE", payload: newMessage });
    setLoading(true);
    setUserInput("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer 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",
          "HTTP-Referer": "https://www.sitename.com",
          "X-Title": "SiteName",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [{ role: "user", content: userInput }],
        }),
      });

      const data = await res.json();
      const markdownText =
        data.choices?.[0]?.message?.content || "No response received.";

      const botMessage = {
        text: markdownText,
        side: "left",
        name: "@DeepSeek V3 API",
        img: "/images/logos.png",
        time: getTime(),
      };

      dispatch({ type: "ADD_MESSAGE", payload: botMessage });
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl h-[700px] bg-white bg-opacity-[3%] backdrop-blur-sm justify-center items-center flex rounded-t-3xl">
      <div className="w-full h-full bg-center bg-cover absolute bg-[url('/images/Earth.jpg')] opacity-[3.5%] contrast-200"></div>
      <div className="w-full h-full absolute bg-center bg-cover bg-[url('/images/gradient.png')] opacity-[40%] rotate-180 "></div>
      <div className="z-1 shadow-xl bg-white bg-opacity-[3%] backdrop-blur-lg rounded-3xl p-3 w-full max-w-md text-white">
        <div className="chatbox-message-header rounded-t-xl border-b">
          <div className="chatbox-message-profile">
            <img
              src="/images/logos.png"
              alt="Chatbot Logo"
              className="chatbox-message-image"
            />
            <div>
              <h4 className="chatbox-message-name">@Deep Seek V3 API</h4>
              <p className="chatbox-message-status">online</p>
            </div>
          </div>
        </div>

        {/* Display Messages */}
        <main id="chatbox-message-content">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chatbox-message-response ${msg.side}-message`}
            >
              <div
                className="chatbox-message-response-image"
                style={{ backgroundImage: `url(${msg.img})` }}
              ></div>
              <div className="chatbox-message-bubble">
                <div className="chatbox-message-info">
                  <div className="chatbox-message-info-name">{msg.name}</div>
                  <div className="chatbox-message-info-time">{msg.time}</div>
                </div>
                <div className="chatbox-message-text">{msg.text}</div>
              </div>
            </div>
          ))}
        </main>

        {loading && (
          <div className="chatbox-message-loading p-[5px]">Loading...</div>
        )}
        {error && <div className="chatbox-message-error">{error}</div>}

        <div className="chatbox-message-bottom rounded-b-xl">
          <form
            onSubmit={sendMessage}
            className="chatbox-message-form text-black"
          >
            <input
              type="text"
              className="chatbox-message-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter your message..."
            />
            <button
              type="submit"
              className="chatbox-message-button"
              disabled={loading}
            >
              <i className="mr-[20px] fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
