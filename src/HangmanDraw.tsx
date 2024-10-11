
type HangmanProps ={
    guessedWordsNumber: number
}
const HangmanDraw = ({guessedWordsNumber}: HangmanProps ) => {
    const Head = (
        <div
            key={1}
            className="absolute w-16 h-16 border-8 border-black border-solid rounded-full right-[-1.7rem] top-20"
        />
    )
    const Body = <div key={2} className="absolute w-2.5 h-20 bg-black top-36 right-0" />
    const Left_hand = (
        <div
            key={3}
            className="absolute w-16 h-2.5 bg-black right-[-0.2rem] top-[11rem] -rotate-45"
        />
    )
    const Right_hand = (
        <div key={4} className="absolute w-16 h-2.5 bg-black right-[-51px] top-[11rem] rotate-45" />
    )
    const Left_leg = (
        <div
            key={5}
            className="absolute w-16 h-2.5 bg-black right-[-0.2rem] top-[14.8rem] -rotate-45"
        />
    )
    const Right_leg = (
        <div
            key={6}
            className="absolute w-16 h-2.5 bg-black right-[-51px] top-[14.8rem] rotate-45"
        />
    )

    const Body_Parts = [Head, Body, Left_hand, Right_hand, Left_leg, Right_leg]
    return (
        <div className="relative w-80 h-96 mx-auto my-12">
            <div className="absolute w-52 h-2.5 bg-black top-0 right-0"></div>
            <div className="absolute w-2.5 h-96 bg-black right-52 top-0"></div>
            <div className="absolute h-2.5 bg-black left-0 bottom-0 w-72"></div>
            <div className="absolute w-2.5 h-20 bg-black top-0 right-0"></div>
            {Body_Parts.slice(0, guessedWordsNumber)}
        </div>
    )
}

export default HangmanDraw
