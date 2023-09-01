// start page after signing up/logging in
// from this page onwards it is not responsive as this is intented to be used on desktop anyways

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'


export default function Start() {

  const [dragActive,setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    if (e.type == "dragenter" || e.type == "dragover") {
      setDragActive(true)
    } else if (e.type == "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation() //prevents bubbling
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length == 1) { //checks for specifically 1 file in the data transfer object array
      console.log("one file was dropped")
    }
  }

  const handleClick = (e) => {
    if (e.target.files && e.target.files.length == 1) {
      console.log("one file was selected")
    }
  }


  return (
    <div>
        <div className='flex flex-col items-center justify-center min-h-screen text-white font-poppins p-24'>
            <h1 className='text-5xl mb-3'>Upload your sales file to get started:</h1>
            <a href='https://www.help-dilato.co.uk/dilato-dashboards' className='text-lg text-accent underline mb-8'>How do I download a sales file?</a>
            <form>
              <input type='file' id='file-input' className='hidden'/>
              <label htmlFor='file-input' className='h-full'>
                <div onDragOver={handleDrag} onDragLeave={handleDrag} onDrop={handleDrop} onClick={handleClick} className={`${dragActive ? 'bg-hoversecondary' : 'bg-secondary'} flex flex-col items-center justify-center w-[700px] h-[370px] rounded-2xl border-solid border-black border-2 cursor-pointer hover:bg-hoversecondary`}>
                  <FontAwesomeIcon icon={faCloudArrowUp} className='h-12 mb-4'/>
                  <button className='text-2xl'>Choose the csv file to upload</button>
                </div>
              </label>
            </form>
        </div>
    </div>
  )
}
