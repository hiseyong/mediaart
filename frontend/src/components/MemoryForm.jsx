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
        .then(res => {
            navigate('/menu')
        })
        
    }

    return(
        <div id="memoryformwrap">
            <form id='memoryform'>
                <input placeholder="이름을 입력해 주세요 (최대 14글자)" id='memoryformname' name='author' onChange={onChange} maxLength='14'/>
                <textarea placeholder="한줄메세지를 입력해 주세요 (최대 30글자)" id='memoryformtext' name='text' onChange={onChange} maxLength='30'/>
                <button id='memoryformsubmit' onClick={onClick}>Submit</button>
            </form>
        </div>
    )
}