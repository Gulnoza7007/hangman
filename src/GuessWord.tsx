type valueProps = {
    word: string,
    guessedWords: string[],
    finished: boolean,
    winner: boolean,
}

const GuessWord = ({ word, guessedWords, finished, winner }: valueProps) => {
    return (
        <div className="flex justify-center">
            {word.split('').map((item, index) => {
                return (
                    <div key={index} className="mx-2 text-center border-b-4 border-black p-3 w-16">
                        <span className={winner? 'text-[green] text-5xl': guessedWords.includes(item)? 'text-5xl': finished? 'text-[red] text-5xl': 'text-5xl invisible'}>{item.toUpperCase()}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default GuessWord
