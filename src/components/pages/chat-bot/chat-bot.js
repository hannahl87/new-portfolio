import React from 'react';
import ReactPlayer from 'react-player';
import './chat-bot.css';

const ChatBot = () => {
  return (
    <div className='flex flex-col text-center m-10' id='chat-bot'>
      <h1 className='font-bold text-xl mb-4'>Chat Bot</h1>
      <div className='video-container flex flex-col justify-center items-center mt-6'>
        <ReactPlayer
          url='https://youtu.be/W9YExAEOWn4'
          className='react-player'
        />
      </div>
      <div className='see-more flex flex-col my-4 text-left'>
        <p>
          This chat bot was built using Angular Typescript. I styled the project
          using Tailwind CSS and SCSS.
        </p>
        <br />

        <h4 className='font-bold'>Some details:</h4>
        <br />
        <p className='about-video'>
          The chat can be opened by pressing the "Chat Now" tab. The chat can be
          closed by pressing the x in the the top right hand corner of the chat
          window. You can also refresh the chat by pressing the arrow in the top
          left of the chat window. If you close or refresh the chat the previous
          conversation will be deleted. To talk to the bot, you can open the
          chat and answer their questions. If a question is asked and a button
          appears, you must click one of the buttons to proceed. If a number is
          required, you must enter a number to proceed. Once you have reached
          the end of the bot questions it will recommend you some holidays if
          your answers match any of the data. If not, you can start again. The
          chat can be downloaded into a text file using the save button in the
          bottom left of the chat. At the end of the conversation you can also
          type your own questions and see if the bot can help you. Why not try
          asking the bot their name? Or if they are hungry. You can also ask the
          bot something else, but they may not always have an answer, after all,
          they are just a bot.
        </p>
        <br />
        <p>You can see more about this project</p>
        <a
          href='https://github.com/hannahl87/chat-bot'
          className='project-link'
          target='_blank'
          rel='noreferrer'
        >
          <button className='here-btn mt-2 py-2 px-4 items-center rounded-lg cursor-pointer'>
            Here
          </button>
        </a>
      </div>
    </div>
  );
};

export default ChatBot;
