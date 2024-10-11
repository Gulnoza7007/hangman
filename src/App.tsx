import { useState, useEffect } from 'react'

import GuessWord from './GuessWord'
import HangmanDraw from './HangmanDraw'
import Keyboard from './Keyboard'

import data from './wordList.json'

function getWord() {
    return data[Math.floor(Math.random() * data.length)]
}

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>('')
    const [guessedWords, setGuessedWords] = useState<string[]>([])
    const [incorrectLetters, setIncorrectLetters] = useState<string[]>([])
    const [finished, setFinished] = useState<boolean>(false)
    const [winner, setWinner] = useState<boolean>(false)

    useEffect(() => {
        setWordToGuess(getWord())
    }, [])

    console.log(wordToGuess);
    

    const HandleClick = (key: string) => {
        guessedWords.push(key)
        setGuessedWords(guessedWords)

        setIncorrectLetters(
            guessedWords.filter(item =>!wordToGuess.includes(item))
        )

        let uniqueArray: string[] = wordToGuess.split('').filter((item, pos) => {
            return wordToGuess.indexOf(item) == pos;
        })
        
        if(uniqueArray.length === guessedWords.filter(item => wordToGuess.includes(item)).length){
            setFinished(!finished)
            setWinner(!winner)
        }
        
        if (incorrectLetters.length >= 5) {
            setFinished(!finished)
        }
    }
    return (
        <div>
            <HangmanDraw guessedWordsNumber={incorrectLetters.length} />
            <GuessWord
                word={wordToGuess}
                guessedWords={guessedWords}
                finished={finished}
                winner={winner}
            />
            <Keyboard
                HandleClick={(key) => HandleClick(key)}
                incorrectLetters={incorrectLetters}
                guessedWords={guessedWords}
                finished={finished}
            />
        </div>
    )
}

export default App
