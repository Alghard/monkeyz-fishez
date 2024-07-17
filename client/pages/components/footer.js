import Image from "next/image";
import ProfilPic from "../assests/icons/monkeyIcon.svg";

export default function Footer() {
    return (
        <div className="flex justify-around text-center p-5 backdrop-blur-sm bg-[#9e8c80]/30">
            <p className="text-4xl font-bold xs:text-3xl ">Contact Us</p>
            <div className="p-5">
                <a href="#">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-20"></Image>
                </a>
                <p>Victor</p>
            </div>
            <div className="p-5">
                <a href="#">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-20"></Image>
                </a>
                <p>Julien</p>
            </div>
        </div>
    );
}
