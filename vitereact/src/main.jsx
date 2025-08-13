import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/js"
import App from './App.jsx'

function MyApp() {
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const anotherElement = (
    <a href="http://google.com" target='_blank'>Visit google</a>
)

const anotherUser = "dathu with react"

const reactElement = React.createElement(
    'a',
    {href: 'http://google.com', target: '_blank'},
    'click me to visit google',
    anotherElement
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   reactElement
 
)
