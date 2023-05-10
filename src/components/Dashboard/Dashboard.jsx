import React from 'react'
import './Dashboard.css'
import {HiUserCircle} from 'react-icons/hi'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillAudio} from 'react-icons/ai'
import {BsFillCameraFill} from 'react-icons/bs'
// import Demo from '../AIchat/Demo'

function Dashboard() {
  return (
    <div className='dashboard'>
        <header>
          <p>MittiAI</p>
          <button><HiUserCircle /></button>
        </header>
        <div>
        <main className='main'>
          {/* <Demo /> */}
        </main>
        <footer className='dashboardFooter'>
          <form className='footerForm' action="#">
            <label htmlFor="#">
              <input className='footerInput' type="text" placeholder='Enter...'/>
              <button className='footerButton' type='submit'><FaTelegramPlane /></button>
            </label>
            <label htmlFor="#">
              <button className='btn send'><FaTelegramPlane /></button>
              <button className='btn audio'><AiFillAudio /></button>
              <button className='btn camera'><BsFillCameraFill /></button>
            </label>
          </form>
        </footer>
        </div>
    </div>
  )
}

export default Dashboard