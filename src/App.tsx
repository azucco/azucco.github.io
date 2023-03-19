import { useRef, useEffect } from 'react'
import './App.css'
import './scss/comingSoon.scss'
import anime from 'animejs';


function App() {

  const lettersRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (lettersRef.current && lettersRef.current.textContent) {
      lettersRef.current.innerHTML = lettersRef.current.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: true})
        .add({
          targets: '.ml11 .line',
          scaleY: [0,1],
          opacity: [0.5,1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, lettersRef.current.getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        }).add({
          targets: '.ml11 .letter',
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i+1)
        }).add({
          targets: '.ml11',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
  }, [lettersRef]); 

  return (
    <div className="App">
      <h1 className="ml11">
        <span className="text-wrapper">
          <span className="line line1"></span>
          <span ref={lettersRef} className="letters">Coming soon</span>
        </span>
      </h1>
    </div>
  )
}

export default App
