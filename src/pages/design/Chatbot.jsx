import React from "react";
import "../style/style.css";

const Chatbot = () => {
  return (
    <div className="w-[1100px] h-[600px] bg-white bg-opacity-10 backdrop-blur-lg justify-center items-center flex rounded-xl border-t border-gray-400">
      <div className="z-1 shadow-xl bg-[#111827] backdrop-blur-lg rounded-xl p-6 w-full max-w-md text-white">
        <div className="chatbox-message-header rounded-t-xl">
          <div className="chatbox-message-profile">
            <img
              src="/images/logos.png"
              alt=""
              className="chatbox-message-image"
            />
            <div>
              <h4 className="chatbox-message-name">@ChatGPT API</h4>
              <p className="chatbox-message-status">online</p>
            </div>
          </div>
        </div>
        <main id="chatbox-message-content"></main>
        <div className="chatbox-message-bottom rounded-b-xl">
          <form action="#" className="chatbox-message-form text-black">
            <input
              type="text"
              rows="1"
              className="chatbox-message-input"
              id="textInput"
              placeholder="Enter your message..."
            />
            <div className="chatbox-message-button">
              <i className="mr-[20px] fas fa-paper-plane"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
