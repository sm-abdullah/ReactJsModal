import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MyModal from './components/MyModal/mymodal'
import './app.scss'
const App = () => {
  return (
    <div className="hi">
      <MyModal Heading="Hello World" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))