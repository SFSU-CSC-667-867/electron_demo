import React, { Component } from 'react';
import { Button } from 'react-desktop/macOs';

const electron = window.require('electron');

export default class App extends Component {
  popUp = () => {
    const message = {
      type: 'POPUP',
    };
    electron.ipcRenderer.send('message', message);
  };

  notify = () => {
    let myNotification = new Notification('Title', {
      body: 'Lorem Ipsum Dolor Sit Amet'
    })
    
    myNotification.onclick = () => {
      console.log('Notification clicked')
    }
  };

  open = () => {
    const message = {
      type: 'OPEN',
    };
    electron.ipcRenderer.send('message', message);
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.popUp}>Do Something</Button>
        <Button onClick={this.notify}>Notify</Button>
        <Button onClick={this.open}>Open File</Button>
      </div>
    );
  }
}
