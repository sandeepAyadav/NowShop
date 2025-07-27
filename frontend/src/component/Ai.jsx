import React, { useContext, useState } from 'react';
import ai from '../assets/ai.png';
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import open from '../assets/open.mp3';

function Ai() {
  let { showSearch, setShowSearch } = useContext(shopDataContext);
  let navigate = useNavigate();
  let [activeAi, setActiveAi] = useState(false);
  let openingSound = new Audio(open);

  function speak(message) {
    let utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition;

  if (speechRecognition) {
    recognition = new speechRecognition();
  } else {
    console.log('Speech recognition is not supported in this browser.');
    return;
  }

  recognition.onresult = e => {
    const transcript = e.results[0][0].transcript.trim().toLowerCase();
    const commands = {
      'search open': () => {
        speak('opening search');
        setShowSearch(true);
        navigate('/collection');
      },
      'search close': () => {
        speak('closing search');
        setShowSearch(false);
      },
      'collection': () => {
        speak('opening collection page');
        navigate('/collection');
      },
      'about': () => {
        speak('opening about page');
        navigate('/about');
        setShowSearch(false);
      },
      'home': () => {
        speak('opening home page');
        navigate('/');
        setShowSearch(false);
      },
      'cart': () => {
        speak('opening your cart');
        navigate('/cart');
        setShowSearch(false);
      },
      'contact': () => {
        speak('opening contact page');
        navigate('/contact');
        setShowSearch(false);
      },
      'order': () => {
        speak('opening your orders page');
        navigate('/order');
        setShowSearch(false);
      },
    };

    // Run the matching command
    for (const command in commands) {
      if (transcript.includes(command)) {
        commands[command]();
        return;
      }
    }

    toast.error('Try Again');
  };

  recognition.onend = () => {
    setActiveAi(false);
  };

  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      onClick={() => {
        recognition.start();
        openingSound.play();
        setActiveAi(true);
      }}
    >
      <img
        src={ai}
        alt=""
        className={`w-[100px] cursor-pointer ${activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : 'translate-x-[0] translate-y-[0] scale-100'} transition-transform`}
        style={{
          filter: `${activeAi ? 'drop-shadow(0px 0px 30px #00d2fc)' : 'drop-shadow(0px 0px 20px black)'}`,
        }}
      />
    </div>
  );
}

export default Ai;
