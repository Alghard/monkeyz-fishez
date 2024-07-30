import Image from "next/image";
import ToggleButton from "./toggleButton";

export default function Cards({ title, description, imageUrl }) {
    return (
        <div
            className="flex flex-col items-center text-center justify-between p-5 h-96 w-72 shadow-xl hover:animate-soft-zoom xs:hover:animate-none overflow-hidden relative z-10"
            id="cardBorder"
        >
            <Image
                src={imageUrl}
                alt={title}
                className="rounded-md h-40 w-40 m-5 object-cover"
                width={20}
                height={20}
                unoptimized="true"
            ></Image>

            <ToggleButton></ToggleButton>

            <h1 className="font-poppins font-bold mb-2">{title}</h1>
            <p className="font-poppins text-sm p-px mb-5">{description}</p>
        </div>
    );
}
