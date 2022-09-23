import React, { useState } from "react"

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

import palavras from "./palavras"

export default function App(){
    let photoVarArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const [initiationVar, setInitiationVar] = useState(0)
    const [wordPicked, setWordPicked] = useState(palavras[Math.floor(Math.random() * (palavras.length -1))])
    const [clickedLetter, setClickedLetter] = useState(false)
    return(
        <>
            <div className="top">
                <div className="image"><img src ={photoVarArray[initiationVar]} alt="foto da forca" /></div>
                <div className="sidebox">
                    <div className="choose-word" onClick={randomWordPicker}>Escolher Palavra</div>
                    <div className="letters">
                        <PalavraEscolhida />
                    </div>
                </div>
            </div>
            <div className="alphabet">
                <Letra />
            </div>
            <div className="guess">
                <div className="know-the-word">Já sei a palavra</div>
                <input type="text" />
                <button>Chutar!</button>
            </div>
        </>
    )

    function randomWordPicker(){
        let newWord = palavras[Math.floor(Math.random() * (palavras.length -1))]
        setWordPicked(newWord)
    }

    function PalavraEscolhida(){
        let wordPickedArray = wordPicked.split('')
        return(wordPickedArray.map(i => <div className="under_score" >{i.toUpperCase()}</div>))
        
    }

    function Letra(){
        const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        return(
            alfabeto.map((i, index) =>
            <button key={index} className="small-box" onClick={clickingTheLetter} disabled = {clickedLetter ? true : false}>
                {i.toUpperCase()}
            </button>)
        )
    }

    function clickingTheLetter(){
        if(clickedLetter === false){
            setClickedLetter(true)
        }
    }
}


