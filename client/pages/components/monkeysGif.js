import Cards from "./cards";

export default function MonkeysGif() {
    return (
        <section className="bg-slate-500 p-2 mt-20">
            <h1 className="ml-10 mt-10 font-extrabold text-2xl">🦍 MONKEYS GIFS</h1>
            <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:items-center justify-around m-10 p-5 relative gap-5">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </section>
    );
}
