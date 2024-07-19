import Cards from "./cards";
import MonkeyList from "./monkeyList";

export default function MonkeysGif() {
    return (
        <section className="p-2 ">
            <h1 className="ml-12 font-alfaslab text-4xl xs:text-2xl xs:mt-2" id="monkeysGif">
                MONKEYS GIFS 🦍
            </h1>
            <hr className="mx-12 my-5 border-gray-600 border-1" />
            <div className="m-10 p-5 relative">
                <MonkeyList />
            </div>
        </section>
    );
}
