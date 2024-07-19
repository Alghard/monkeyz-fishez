import Image from "next/image";
import bouncyMoki from "../assets/images/bouncyMoki.svg";

export default function Header() {
    return (
        <div className="relative before:content-lianeG after:content-lianeD before:absolute before:top-0 before:left-0 after:absolute after:top-0 after:right-0 after:inline-block after:size-40">
            <div className="flex justify-around p-5 bg-[#F5F3E2]">
                <Image src={bouncyMoki} className="size-12 animate-bouncy-move" alt="Bouncy Moki" />
            </div>
            <div>
                <nav className="bg-[#276B4D] mx-auto m-5 p-2 font-poppins font-medium text-white">
                    <ul className="flex justify-around">
                        <li className="p-5">
                            <a href="#monkeysGif ">Monkeys Gifs</a>
                        </li>
                        <li className="p-5">
                            <a href="#trendyGif">Trending Gifs</a>
                        </li>
                        <li className="p-5">
                            <a href="#fishesGif">Fishes Gifs</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
