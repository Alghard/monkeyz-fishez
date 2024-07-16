import Image from "next/image";
import profilPic from "../assests/images/pictry.png";

export default function Cards() {
    return (
        <div className="flex flex-col items-center gap-5 box-border h-68 w-48 p-5 border-4  border-gray-400 ">
            <Image src={profilPic} alt="Gif" className="w-48"></Image>
            <h1>TITRE</h1>
            <p>Description</p>
        </div>
    );
}
