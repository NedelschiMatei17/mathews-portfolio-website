import { useEffect, useState } from 'react';
import Logon from '../../assets/images/logon.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Hello = () =>{
  const [letterClass,setLetterClass]=useState('text-animate');
  const firstName = ['','M','a','t','h','e','w'];
  const nameArray = ['e','d','e','l','s','c','h','i'];
  const titleArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
  <>
  <Loader type="pacman"/>
  <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m </span>
          <AnimatedLetters letterClass={letterClass} strArray={firstName} ind={15}/>
          <img src={Logon} alt = "developer's name"/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} ind={20}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={titleArray} ind={22}/>
        </h1>
        <h2>Software Developer / Student</h2>
        <Link to="/contact" className='button'>CONTACT ME</Link>
      </div>
    <Logo />
  </div>
  </>
  );
}
export default Hello