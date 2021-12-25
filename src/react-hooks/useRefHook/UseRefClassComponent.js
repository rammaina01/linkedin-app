import React, { Component ,createRef } from 'react'

class UseRefClassComponent extends Component {
    textInput = createRef();

    focusTextInput = () => this.textInput.current.focus();
  
    render() {
      return (
        <div>
          <input type="text" ref={this.textInput} />
          <button onClick={this.focusTextInput}>Focus the text input</button>
        </div>
      );
    }
}

export default UseRefClassComponent
