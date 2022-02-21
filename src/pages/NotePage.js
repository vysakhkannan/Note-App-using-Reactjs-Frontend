import {React, useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/chevron-left.svg'

const NotePage = () => {

    let noteId = useParams()
    let [note, setNote] = useState(null)
    const navigation = useNavigate()

    useEffect(() => {
        getNote()

    },[noteId])

    let getNote = async () =>{
        
        if (noteId.id === 'new') return
        let response = await fetch(`/api/notes/${noteId.id}/`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {   
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(note)
        })
    }


    let updateNote = async () => {
        fetch(`/api/notes/${noteId.id}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId.id}/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
        })
        navigation('/')
    }

    let handleSubmit = () =>{
        console.log('body:',note)
        if (noteId.id !== 'new' && note.body=== ''){
            deleteNote()
        }else if (noteId.id !== 'new'){
            updateNote()
        }else if (noteId.id === 'new' && note.body !== null){
            createNote()
        }
        navigation("/")
    }


    return(
      <div className='note'>
          <div className="note-header">
              <h3>
                    <ArrowLeft onClick={handleSubmit}/>
              </h3>
              {noteId.id !== 'new' ? (
                  <button onClick={deleteNote}>Delete</button>
              ):(
                  <button onClick={handleSubmit}>Done</button>
              )}


          </div>
          <textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>

      </div>
    )

};

export default NotePage;
