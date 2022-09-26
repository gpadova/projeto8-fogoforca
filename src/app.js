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
    
    const photoVarArray = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let [initiationVar, setInitiationVar] = useState(0)
    const [wordPicked, setWordPicked] = useState("")
    const [clickedLetter, setClickedLetter] = useState(false)
    const [initialState, setInitialState] = useState(true)
    const [disabledButton, setDisabledButton] = useState(false)
    let [listOfRightLetters, setListOfRightLetters] = useState([])
    let [listOfWrongLetters, setListOfWrongLetters] = useState([])
    const [gameStarted, setGameStarted] = useState(false)
    let [codifiedWord , setCodifiedWord] = useState()
    
    function randomWordPicker(){
        let newWord = palavras[Math.floor(Math.random() * (palavras.length -1))]
        setWordPicked(newWord)
    }

    function clickingTheLetter(selectedLetter, entireWord){
        setDisabledButton(true)
        const wordWithoutBS = entireWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const wordSeparated = wordWithoutBS.split("")

        if(wordSeparated.includes(selectedLetter)){
            listOfRightLetters = [...listOfRightLetters, selectedLetter]
            setListOfRightLetters(listOfRightLetters)
            displayLetter(selectedLetter, entireWord)
        }else{
            listOfWrongLetters = [...listOfWrongLetters, selectedLetter]
            setListOfWrongLetters(listOfWrongLetters)
            setInitiationVar(initiationVar + 1)
        }      
    }

    function displayLetter(l, word){
        let wordArr = word.split("");
        let wordComparing = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let wordToCheckArr = wordComparing.split("");
        let newWordArray = wordToCheckArr.map((l, i) =>
                listOfRightLetters.includes(l) ? wordArr[i] : "_"
                );
        codifiedWord = newWordArray.join(" ");
        setCodifiedWord(codifiedWord);
    }

    function gameWon(){

    }

    function gameLost(){

    }

    function startGame(){

    }
    function clearGame(){

    }
    
    function PalavraEscolhida(){
        let wordPickedArray = wordPicked.split('')
        return(wordPickedArray.map(i => <div className="under_score" >{i.toUpperCase()}</div>))
        
    }

    function Letra(){      
        return(
            alfabeto.map((i, index) =>
            <button disabled = {disabledButton ? true : false} key={index} className="small-box" onClick={() => {clickingTheLetter(); gameWon(); gameLost()}}>
                {i.toUpperCase()}
            </button>)
        )
    }

    
    return(
        <>
            <div className="top">
                <div className="image"><img src ={photoVarArray[initiationVar]} alt="foto da forca" /></div>
                <div className="sidebox">
                    <button className="choose-word" onClick={() =>{ clearGame(); randomWordPicker() ; startGame()}}>Escolher Palavra</button>
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
                <button disabled = {disabledButton}>Chutar!</button>
            </div>
        </>
            )
}


