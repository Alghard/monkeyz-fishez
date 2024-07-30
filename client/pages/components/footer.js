import Image from "next/image";
import LinkedinIcon from "/public/icons/linkedinIcon.svg";
import MailIcon from "/public/icons/mailIcon.svg";
import AboutmeIcon from "/public/icons/aboutmeIcon.svg";

export default function Footer() {
    return (
        <div
            className="flex justify-around items-center text-center mt-10 p-5 font-poppins font-medium text-white relative after-content-footerBanner"
            id="footerResponsive"
        >
            <p className="text-3xl xs:text-lg font-bold z-50">Contact Us</p>

            <div className=" flex flex-col gap-5 p-5 z-50 shrink-0 xs:gap-2">
                <a href="#" className="text-xl xs:text-lg">
                    Victor
                </a>
                <div className="flex gap-5 xs:gap-3">
                    <a href="https://www.linkedin.com/in/victor-lobb%C3%A9-999848296/" target="blank">
                        <Image src={LinkedinIcon} alt="Linkedin" height={31} width={31}></Image>
                    </a>
                    <a href="mailto:victorlobbe@gmail.com">
                        <Image src={MailIcon} alt="Mail" height={31} width={31}></Image>
                    </a>
                    <a href="#" target="blank">
                        <Image src={AboutmeIcon} alt="Folio" height={31} width={31}></Image>
                    </a>
                </div>
            </div>

            <div className=" flex flex-col gap-5 z-50 shrink-0 xs:gap-2">
                <a href="#" className="text-xl xs:text-lg">
                    Julien
                </a>
                <div className="flex gap-5 xs:gap-3">
                    <a href="https://www.linkedin.com/in/julien-varela-b23843296/" target="blank">
                        <Image src={LinkedinIcon} alt="Linkedin" height={31} width={31}></Image>
                    </a>
                    <a href="mailto:julien.varela@gmail.com">
                        <Image src={MailIcon} alt="Mail" height={31} width={31}></Image>
                    </a>
                    <a href="#" target="blank">
                        <Image src={AboutmeIcon} alt="Folio" height={31} width={31}></Image>
                    </a>
                </div>
            </div>
        </div>
    );
}
