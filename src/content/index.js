import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import MainModal from './components/mainModal'
import './antd-diy.css'
import './content.styl'

function Content() {
    const [mainModalVisiable, setMainModalVisiable] = useState(false)

    return (
        <div className="CRX-content">
            <div
                className="content-entry"
                onClick={() => {
                    setMainModalVisiable(true)
                }}
            ></div>
            {mainModalVisiable ? (
                <MainModal
                    onClose={() => {
                        setMainModalVisiable(false)
                    }}
                />
            ) : null}
        </div>
    )
}

const app = document.createElement('div')
app.id = 'CRX-container'
document.body.appendChild(app)

ReactDOM.render(<Content />, app)

try {
    let insertScript = document.createElement('script')
    insertScript.setAttribute('type', 'text/javascript')
    insertScript.src = window.chrome.extension.getURL('insert.js')
    document.body.appendChild(insertScript)
} catch (err) {}
