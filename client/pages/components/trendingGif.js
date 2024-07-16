import Cards from "./cards";

export default function TrendingGif() {
    return (
        <section>
            <h1 className="ml-10 mt-10">TRENDING GIFS</h1>
            <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col xs:items-center justify-evenly m-10 p-5 border-2 border-red-300 relative gap-5">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </section>
    );
}
