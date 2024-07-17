import Image from "next/image";
import bouncyMoki from "../assests/images/bouncyMoki.svg";

export default function Header() {
    return (
        <div className="flex justify-around p-5 backdrop-blur-sm bg-[#9e8c80]/30">
            <div>
                <Image src={bouncyMoki} className="size-12 animate-bouncy-move"></Image>
            </div>
            <div>
                <ul className="flex mx-auto m-5">
                    <li className="p-5  ">Monkeys Gifs</li>
                    <li className="p-5">Fishes Gifs</li>
                    <li className="p-5">Trending Gifs</li>
                </ul>
            </div>
        </div>
    );
}
