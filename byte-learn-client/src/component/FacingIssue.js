import React, { useState, useRef, useEffect } from 'react';
import { FaComment, FaTimes } from 'react-icons/fa';
import { FaRobot } from "react-icons/fa6";
import { AiOutlineSend } from 'react-icons/ai';
import './FacingIssue.css';
import { ReactDOM } from 'react';

const FacingIssue = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const chatboxRef = useRef(null);
  const chatInputRef = useRef(null);

  useEffect(() => {
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [showChatbot]);

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
  
    let chatContent;
    if (className === "outgoing") {
      chatContent = document.createElement("p");
      chatContent.textContent = message;
    } else {
      const span = document.createElement("span");
      span.className = "chat-icon";
      span.innerHTML = '<FaRobot />';
      chatContent = document.createElement("p");
      chatContent.textContent = message;
  
      span.appendChild(chatContent);
      chatLi.appendChild(span);
    }
  
    chatLi.appendChild(chatContent);
    return chatLi;
  };
  
  

  const generateResponse = async () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatInputRef.current;
  
    // Check if "Thinking..." is already in the chatbox
    const existingThinkingLi = Array.from(chatboxRef.current.children).find(
      (child) =>
        child.classList.contains("chat") &&
        child.classList.contains("incoming") &&
        child.textContent.trim() === "Thinking..."
    );
  
    if (!existingThinkingLi) {
      // Append "Thinking..." to the chatbox only if it's not already there
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userMessage }],
      })
    };
  
    try {
      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
  
      const incomingMessage = data.choices[0].message.content.trim();
  
      // Replace the "Thinking..." message with the correct output
      if (existingThinkingLi) {
        existingThinkingLi.querySelector("p").textContent = incomingMessage;
      }
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Something went wrong. Please try again.";
    } finally {
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
    }
  };
  

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setUserMessage("");

    chatboxRef.current.appendChild(createChatLi(trimmedMessage, "outgoing"));
    chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);

    setTimeout(() => {
      const incomingChatLi = createChatLi("Thinking...", "incoming");
      chatboxRef.current.appendChild(incomingChatLi);
      chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
      generateResponse();
    }, 200);
  }

  const handleInputChange = () => {
    const inputInitHeight = chatInputRef.current.scrollHeight;
    chatInputRef.current.style.height = `${inputInitHeight}px`;
    chatInputRef.current.style.height = `${chatInputRef.current.scrollHeight}px`;
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleChat();
    }
  }

  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbot' : ''}`}>
      <button className="chatbot-toggler" onClick={() => setShowChatbot(!showChatbot)}>
        {showChatbot ? <FaTimes /> : <FaComment />}
      </button>
      <div className="chatbot">
        <header>
          <h2>Facing an issue?</h2>
          <span className="close-btn" onClick={() => setShowChatbot(false)}><FaTimes /></span>
        </header>
        <ul className="chatbox" ref={chatboxRef}>
          <li className="chat incoming">
            <span className="chat-icon"><FaRobot /></span>
            <p>Hi there 👋<br />How can I help you today?</p>
          </li>
        </ul>
        <div className="chat-input">
          <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            onInput={handleInputChange}
            ref={chatInputRef}
          />
          <span className="send-icon" onClick={handleChat}><AiOutlineSend /></span>
        </div>
      </div>
    </div>
  );
}

export default FacingIssue;
