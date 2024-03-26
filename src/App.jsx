import './App.css';
import { Component } from 'react';
import { connect,sendMsg } from './api';

import ChatHistory from './Component/ChatHistory';
import Header from './Component/Header';
import ChatInput from './Component/ChatInput';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      chatHistory:[],
    }
  }

  componentDidMount(){
    connect((msg)=>{
      console.log("New Messages from user");
      this.setState(prevState =>({
        chatHistory:[...prevState.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  send(event){

    // event.charCode == on key press
    // on key down === event.keyCode
    if (event.keyCode === 13){
      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <div className='flex-grow overflow-hidden'>
          <ChatHistory chatHistory={this.state.chatHistory} />
        </div>
        <div className="overflow-auto">
          <ChatInput send={this.send}/>
        </div>
      </div>
    );
  }
}

export default App;