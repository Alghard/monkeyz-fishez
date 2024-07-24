import Image from "next/image";
import ProfilPic from "/public/icons/monkeyIcon.svg";

export default function Footer() {
    return (
        <div className="flex justify-around items-center text-center p-5 bg-[#276B4D] font-poppins font-medium text-white ">
            <p className="text-4xl font-bold xs:text-3xl before:content-['_🐠_'] after:content-['_🐵_'] hover:before:content-['_➡️_'] hover:after:content-['_➡️_'] ">
                Contact Us
            </p>
            <div className="p-5">
                <a href="#">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-20"></Image>
                </a>
                <p>Victor</p>
            </div>
            <div className="p-5">
                <a href="mailto:julien.varela@gmail.com">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-20"></Image>
                </a>
                <p>Julien</p>
            </div>
        </div>
    );
}
