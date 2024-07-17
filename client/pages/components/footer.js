import Image from "next/image";
import ProfilPic from "../assests/icons/monkeyIcon.svg";

export default function Footer() {
    return (
        <div className="flex justify-around text-center p-5 bg-[#9e8c80] mt-20 ">
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
