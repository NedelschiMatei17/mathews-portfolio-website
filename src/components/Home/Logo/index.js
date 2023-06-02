import './index.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import logon from '../../../assets/images/logon.svg';

const Logo = () =>{
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  useEffect(() => {
    gsap
    .timeline()
    .to(bgRef.current, {
      duration: 1,
      opacity: 1,
    })
    .from(outlineLogoRef.current, {
      slide: 0,
      duration: 20,
    })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.2,
        duration: 3,
      }
    )

  }, [])

  return(
    <div className='logo-container' ref={bgRef}>
      <img className='solid-logo' ref={solidLogoRef} src={logon} alt='N'/>
      <svg
      fill="none"
      height="800px"
      width="800px"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 23.631 23.631"
      xmlSpace="preserve"
      stroke="#ffffff"
      className="svg-container"
      
      >
      <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
      <g
        id="SVGRepo_tracerCarrier ref={outlineLogoRef}"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier" >
        <g>
          <g>
            <polygon points="0,0.663 9.401,0.663 15.882,7.146 15.882,14.127 5.307,3.608 5.274,22.969 0,22.969 " />
            <polygon points="23.631,22.969 14.232,22.969 7.752,16.485 7.752,9.501 18.327,20.018 18.359,0.662 23.631,0.662 " />
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </g>
      </g>
    </svg>
  </div>
  )
}

export default Logo