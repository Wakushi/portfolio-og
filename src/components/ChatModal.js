import React from "react";
import makushi from "../assets/images/pro_pfp.png";

export default function ChatModal({ toggleChatModal }) {
  const webhookUrl = process.env.REACT_APP_DISCORD_WEB_HOOK;

  function sendMessage(e) {
    e.preventDefault();
    const date = new Date();
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const messageContent = `
        ------------------------
        *${date}* 

        __**Username**__ : ${userName}
        __**Email**__ : ${userEmail} 
        __**Message**__ : ${message}
        `;

    if (userName && userEmail && message) {
      fetch(webhookUrl, {
        body: JSON.stringify({
          content: messageContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then(function () {
          const sendBtn = document.getElementById("sendBtn");
          sendBtn.classList.add("bounce-out-right");
          document.getElementById("form-content").style.opacity = "0";
          setTimeout(() => {
            toggleChatModal();
          }, 1500);
        })
        .catch(function (error) {
          console.error(error);
          alert("There was an error. " + error);
        });
    } else {
      alert("Please fill in all information.");
    }
  }

  return (
    <div id="chat-modal" className="chat-modal tilt-in-right-1">
      <div className="chat-modal__header flex--around">
        <div className="chat-modal__header__picture">
          <img src={makushi} alt="a picture of me"></img>
        </div>
        <div className="chat-modal__header__text flex--simple">
          <span>Makushi Bot</span>
          <span>Write me a message!</span>
        </div>
        <i onClick={toggleChatModal} className="fa-solid fa-xmark"></i>
      </div>
      <form className="chat-modal__form flex--simple">
        <div id="form-content" className="form-content flex--simple">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Sarah" required type="text"></input>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="sarah@gmail.com"
            required
            type="email"
          ></input>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="I like your work !"
            required
            rows="8"
          ></textarea>
        </div>
        <button id="sendBtn" onClick={sendMessage} className="classic-button">
          Send
        </button>
      </form>
    </div>
  );
}
