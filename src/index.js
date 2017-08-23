import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

require('typeface-source-sans-pro')

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
