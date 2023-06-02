import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, ind }) => {
  return (
    <span>
      {strArray.map((letter, i) => (
        <span key={letter + i} className={`${letterClass} _${i + ind}`}>
          {letter}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
