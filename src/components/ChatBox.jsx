import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { Segment } from 'semantic-ui-react';
import botFace from './team_2.jpg';

const theme = {
  background: '#ffffff', 
  headerBgColor: '#000000', 
  headerFontColor: '#ffffff', 
  headerFontSize: '15px',
  botBubbleColor: '#000000', 
  botFontColor: '#ffffff', 
  userBubbleColor: '#ffffff', 
  userFontColor: '#000000', 
};

const ThemedExample = () => {

  // Chatbot steps
  const steps = [
    {
      id: '1',
      message: 'Hello Guys',
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <> 
          <Segment style={{ 
            position: 'fixed', 
            bottom: '60px', 
            right: '20px',
            width: '300px',
            borderRadius: '5px',
            overflow: 'hidden' 
          }}>
            <ChatBot
              headerTitle="Agent XAY56 from Venus"
              botAvatar={botFace}
              steps={steps}
              floating={true}
            />
          </Segment>
        
      </>
    </ThemeProvider>
  );
};

export default ThemedExample;
