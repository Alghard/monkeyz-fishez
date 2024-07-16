import Image from "next/image";
import ProfilPic from "../assests/icons/monkeyIcon.svg";

export default function Footer() {
    return (
        <div className="flex justify-around text-center border-2 border-violet-500 p-10">
            <p className="text-lg font-bold">Contact Us</p>
            <div>
                <a href="#">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-14"></Image>
                </a>
                <p>Victor</p>
            </div>
            <div>
                <a href="#">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-14"></Image>
                </a>
                <p>Julien</p>
            </div>
        </div>
    );
}
