import React, { useState, useEffect } from 'react';
import { BiConversation} from "react-icons/bi";
import axios from 'axios';
import './MensajesChat.css';

export function MensajesChat() {
  const [mensajes, setMensajes] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/mensaje-chat/')
      .then(response => {
        setMensajes(response.data);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
      });
  }, []);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chat-container">
      {isChatOpen && (
        <div className="chat-modal">
          <div className="modal-header">
            <h2>Mensajes de Chat</h2>
            <button className="close-button" onClick={toggleChat}>
              Cerrar
            </button>
          </div>
          <ul className="message-list">
            {mensajes.map(mensaje => (
              <li key={mensaje.id} className="message">
                {/* Contenido del mensaje */}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className={`chat-icon ${isChatOpen ? 'open' : ''}`} onClick={toggleChat}>
        <BiConversation className="chat-icon" />
      </div>
    </div>
  );
}

export default MensajesChat;
