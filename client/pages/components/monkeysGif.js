import Cards from "./cards";

export default function MonkeysGif() {
    return (
        <section className="p-2">
            <h1 className="ml-12 font-extrabold text-4xl xs:text-2xl xs:mt-2">MONKEYS GIFS 🦍 </h1>
            <hr className="m-12 border-gray-600 border-1" />
            <div className="flex flex-wrap lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:items-center justify-around m-10 p-5 relative gap-5">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </section>
    );
}
