export default function Header() {
    return (
        <div className="relative before-content-lianeG after-content-lianeD">
            <div id="ThreeJsMonkey" />
            <div>
                <nav className="bg-[#276B4D] mx-auto p-2 font-poppins font-medium xs:text-sm xs:text-center text-white">
                    <ul className="flex justify-around z-30">
                        <li className="p-5  z-30">
                            <a href="#monkeysGif">Monkeys Gifs</a>
                        </li>
                        <li className="p-5  z-30">
                            <a href="#trendyGif">Trending Gifs</a>
                        </li>
                        <li className="p-5  z-30">
                            <a href="#fishesGif">Fishes Gifs</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
