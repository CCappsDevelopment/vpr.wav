import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class ModalWindow extends React.Component {

  render() {
    return (
      <div className="modal-window">
        <p>Here's some text</p>
      </div>
    )
  }

}

class Desktop extends React.Component {
  
  render() {
    return (
      <div className="desktop">
        <ModalWindow />
      </div>
    )
  }

}
// =====================================================================

ReactDOM.render(
  <Desktop/>,
  document.getElementById('root')
);

