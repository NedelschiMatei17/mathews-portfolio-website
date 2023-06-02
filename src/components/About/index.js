import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import {useState,useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt,faJsSquare, faNodeJs, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () =>{
  const [letterClass,setLetterClass]=useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return(
    <>
    <div className="about-page container">
      <div className="text-zone">
          <h1><AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ","m","e"]}
          ind={15}/></h1>
          <p>
            I'm a very ambitious student developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I am a confident computer science student with a strong sense of realism,my natural curiosity drives me to constantly explore and learn.
          </p>
          <p>I have an innate passion for discovering new concepts, technologies, and problem-solving strategies.</p>
        </div>
            <div className="cube-cont" >
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
              <div className="cube-spin" id="title">
                <div className="f1">
                    <FontAwesomeIcon icon={faNodeJs} color="#68A063"/>
                </div>
                <div className="f2">
                    <FontAwesomeIcon icon={faPython} color="#FFE873"/>
                </div>
                <div className="f3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                </div>
                <div className="f4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className="f5">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
                <div className="f6">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
              </div>
        </div>  
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default About