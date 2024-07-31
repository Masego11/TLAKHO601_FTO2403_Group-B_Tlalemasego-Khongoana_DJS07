import React from "react"
import memesData from "./memesData.js"

function App() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  
  }

  return (
    <>
    <div>
        <header className="header">
        <img src = "./images/troll-face.png" className = "header--image"/>
          <h2 className="header--title">Meme Generator</h2>
          <h4 className="header--project">React</h4>
        </header>
    </div>
    <main>
      <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            />
          <button
            className="form--button"
            onClick={getMemeImage}
          >
            Get a new meme image
          </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
    </>
  )
   
}

export default App
