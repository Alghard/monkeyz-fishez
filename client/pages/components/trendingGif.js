import Cards from "./cards";

export default function TrendingGif() {
    return (
        <section className="p-2 mt-10 xs:mt-10">
            <h1 className="ml-12 font-alfaslab text-4xl xs:text-2xl xs:mt-2" id="trendyGif">
                TRENDING GIFS 📈
            </h1>
            <hr className="mx-12 my-5 border-gray-600 border-1" />

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
