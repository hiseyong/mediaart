import '../style/memoryform.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export function MemoryForm() {
    const navigate = useNavigate()
    const client = axios.create()
    const [message, setMessage] = useState({
        'author': '',
        'text' : ''
    })

    const onChange = (e) => {
        setMessage({
            ...message,
            [e.target.name] : e.target.value
        })
        console.log(message)
    }

    const onClick = () => {
        client.post('http://127.0.0.1:8000/postMessage',{message})
        navigate('/menu')
    }

    return(
        <div id="memoryformwrap">
            <form id='memoryform'>
                <input placeholder="Enter your name (max is 14)" id='memoryformname' name='author' onChange={onChange} maxLength='14'/>
                <textarea placeholder="Enter your message (max is 30)" id='memoryformtext' name='text' onChange={onChange} maxLength='30'/>
                <button id='memoryformsubmit' onClick={onClick}>Submit</button>
            </form>
        </div>
    )
}