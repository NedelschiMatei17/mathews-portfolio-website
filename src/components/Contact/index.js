import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState,useEffect,useRef } from 'react'
import emailjs from '@emailjs/browser'
import {MapContainer,TileLayer, Marker, Popup} from 'react-leaflet'

const Contact = () =>{

  const [letterClass,setLetterClass]=useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ddw9rgc', 'template_4dl00lv', form.current, 'iTPnp_0jckLubi2m-')
    .then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    );}
  return (
  <>
    <div className="container contact">
          <div className='text-zone'>
            <h1><AnimatedLetters letterClass={letterClass} strArray={["C","o","n","t","a","c","t"," ","m","e"]} ind={15}/></h1>
            <p>
            I believe that my enthusiasm for programming, 
            ambition, commitment, and work ethic make me an 
            excellent candidate for any opportunity.
            </p>
            <div className='contact-form' >
              <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li className='half'>
                      <input type='text' name="name" placeholder='Name' required/>
                    </li>
                    <li className='half'>
                      <input type='email' name="name" placeholder='Email' required/>
                    </li>
                    <li>
                      <input placeholder='Subject' type="text" name="subject" required/>
                    </li>
                    <li>
                      <textarea placeholder='Message' name="message" required></textarea>
                    </li>
                    <li>
                      <input placeholder='Message' className='buttonu' type="submit" name="button" value="SEND"></input>
                    </li>
                  </ul>
              </form>
            </div>
          </div>
          <div className='info'>
            Matei Nedelschi,
            <br/>
            <span>nedelschi.matei@gmail.com</span>
            <br/>
            Bucharest, Romania
          </div>
          <div className='map-wrap'>
            <MapContainer center={[44.4273,26.0924]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>
    </div>
    <Loader type='pacman'></Loader>
  </>)
}

export default Contact