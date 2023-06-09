
import React from 'react'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'> 
             <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        
                    <a href='https://www.google.com/'>
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='https://www.google.com/'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.google.com/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.youtube.com/'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://www.google.com/'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        hello i'm <span className='highlighted-text'>Ajit</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                      
                        <h1>
                           
                           <Typical
                           loop={Infinity}
                           steps={[
                            "Enthusiastic dev 🔴",
                            1000,
                            "full stack developer 🌍",
                            1000,
                            "MERN stack dev ❤",
                            1000,
                    
                            "React/Node",
                            1000
                           ]}
                           />
                        </h1>
                        <span className='profile-role-tagline'>
                            Knack of building applications with front and back end oprations
                        </span>
                    </span>
                </div>
                <div className='profile-optins'>
                
                    <button className='btn primary-btn'
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                        Hire me
                    </button>
                    <a href='ehizcv.pdf' download="Ehiedu ehizcv.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
             </div>
             <div className='profile-picture'>
                <div className='profile-picture-background'></div>
             </div>
        </div>
    </div>
  )
}
