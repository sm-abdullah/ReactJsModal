/// <reference path="../../Types/MyModal.tsx" />
import * as React from 'react'
import * as ReactDom from 'react-dom'
import ReactModal from 'react-modal'
import Step01 from './step01'
export default class MyModal extends React.Component<MyModal.props, MyModal.state> {
  constructor(props: MyModal.props) {
    super(props);
    this.state = {
      isOpen: false,
      step: 1
    }
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.nextScreen = this.nextScreen.bind(this)
  }

  private customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 6, 6, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      minWidth: '500px',
      height: '300px',
      maxWidth: '700px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',


    }
  };
  private openModal() {
    this.setState({ isOpen: true, step: 1 })
  }
  private nextScreen() {
    if (this.state.step < 2) {
      this.setState({ step: this.state.step + 1 })
    }
    else {
      this.setState({ isOpen: false })
    }
  }
  private afterOpenModal() {

  }
  private closeModal() {
    this.setState({ isOpen: false, step: 1 })
  }
  render() {

    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <ReactModal
          isOpen={this.state.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.customStyles}
          contentLabel="Example Modal"
        >

          {
            this.state.step == 1 && <Step01 />
          }
          {
            this.state.step == 2 && <h1> Hi i am step 02 </h1>
          }
          <div className="buttons">
            <button onClick={this.closeModal}>close</button>
            <button onClick={this.nextScreen}> Next </button>
          </div>
        </ReactModal>
      </div>
    );
  }
}
