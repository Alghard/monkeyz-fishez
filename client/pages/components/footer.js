import Image from "next/image";
import ProfilPic from "/public/icons/monkeyIcon.svg";
import LinkedinIcon from "/public/icons/linkedinIcon.svg";
import GithubIcon from "/public/icons/githubIcon.svg";
import AboutmeIcon from "/public/icons/aboutmeIcon.svg";

export default function Footer() {
    return (
        <div className="flex justify-around items-center text-center p-5 bg-[#276B4D] font-poppins font-medium text-white ">
            <p className="text-4xl font-bold xs:text-3xl before:content-['_🐠_'] after:content-['_🐵_'] hover:before:content-['_➡️_'] hover:after:content-['_➡️_'] ">
                Contact Us
            </p>
            <div className="flex flex-col items-center p-5">
                <a href="#" className="text-xl">
                    Victor
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-32"></Image>
                </a>
                <div className="flex flex-row gap-5">
                    <a href="#">
                        <Image src={LinkedinIcon} alt="Linkedin" height={30} width={30}></Image>
                        <p>LinkedIn</p>
                    </a>
                    <a href="#">
                        <Image src={GithubIcon} alt="GitHub" height={31} width={31}></Image>
                        <p>GitHub</p>
                    </a>
                    <a href="#">
                        <Image src={AboutmeIcon} alt="Folio" height={30} width={30}></Image>
                        <p>Folio</p>
                    </a>
                </div>
            </div>

            <div className="flex flex-col items-center p-5">
                <a href="#" className="text-xl">
                    Julien
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-32"></Image>
            <div className="p-5">
                <a href="mailto:julien.varela@gmail.com">
                    <Image src={ProfilPic} alt="ProfilPicture" className="size-20"></Image>
                </a>
                <div className="flex flex-row gap-5 ">
                    <a href="#">
                        <Image src={LinkedinIcon} alt="Linkedin" height={30} width={30}></Image>
                        <p>LinkedIn</p>
                    </a>
                    <a href="#">
                        <Image src={GithubIcon} alt="GitHub" height={31} width={31}></Image>
                        <p>GitHub</p>
                    </a>
                    <a href="#">
                        <Image src={AboutmeIcon} alt="Folio" height={30} width={30}></Image>
                        <p>Folio</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
