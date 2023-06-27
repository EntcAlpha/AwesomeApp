import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Projects/My_Chat/App"
import { AuthContextProvider } from './Projects/My_Chat/Context/AuthContext';
import { ChatContextProvider } from './Projects/My_Chat/Context/ChatContext';

ReactDOM.render(<>
<AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App /> 
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
</>, document.getElementById('root')); 

