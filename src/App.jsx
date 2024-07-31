import React from "react"
import memesData from "./memesData.js"

function App() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })
  const [allmemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allmemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  
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
      <img src={meme.randomImage} className="meme--image" />
    </main>
    </>
  )
   
}

export default App
