import React from "react";

function Meme() {
    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    });
    const [allMemes, setAllMemes] = React.useState([]); // The allmemes state holds the array of memes fetched from the API

//The React.useEffect runs after the component mounts to fetch the memes. 
React.useEffect(() => {
    async function getMemes(){    //The getMemes function fetches the data from the API, parses the response as JSON and updates the allMemes state with the array of meme objects 
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
    getMemes();
  }, []);

 // The getMemeImage function selects a random meme from the all memes array
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length); // It updates the randomImage propety of the meme state with the URL of the selected meme
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  
  }

  // The handleChange function updates the toptext or bottomText properties of the meme state when input is added to the field using the name attribute of the input elements to determine which property to update
  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }
// The retun statement defines the jsx structure of the component , including a header section with title, description and image and the main section containing a form with text inputs, a buttom to get new meme and div to display the meme images. 
  return (
    <>
    <main>
      <div className="form">
          <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />
          <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            />
          <button
            className="form--button"
            onClick={getMemeImage}
          >
            Get a new meme image 
          </button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} className="meme--image"/>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
    </>
  );
   
}

export default Meme;