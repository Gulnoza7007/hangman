const Keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

type KeyProps={
    HandleClick: (key: string) => void,
    incorrectLetters: string[],
    guessedWords: string[],
    finished: boolean,
}

function Keyboard({HandleClick, incorrectLetters, guessedWords, finished}:KeyProps) {
    return (
        <div className="w-[40rem] flex justify-center flex-wrap  mx-auto my-16 gap-2 ">
            {Keys.map((key, index) => {
                const inCorrect: boolean = incorrectLetters.includes(key) 
                const isActive: boolean = guessedWords.includes(key)
                return (
                    <button
                        key={index}
                        disabled={isActive || inCorrect || finished}
                        onClick={()=> HandleClick(key)}
                        className={inCorrect? "text-4xl text-black font-medium border-black border-solid  border-2 text-center w-16 opacity-35 ursor-not-allowed" : isActive? 'text-4xl font-medium bg-cyan-400 text-white border-solid border-black border-2 text-center w-16' : "text-4xl font-medium border-black border-solid  border-2 text-center w-16"}
                    >
                        {key.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
}

export default Keyboard
