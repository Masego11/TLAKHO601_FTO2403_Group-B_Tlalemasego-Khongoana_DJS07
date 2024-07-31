function App() {

  return (
    <>
    <div>
        <header className="header">
        <img
          src = "./images/troll-face.png"
          className = "header--image"
        />
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
            //onClick={getMemeImage}
          >
            Get a new meme image
          </button>
      </div>
    </main>
    </>
  )
   
}

export default App
