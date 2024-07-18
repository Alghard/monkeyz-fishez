import Image from "next/image";
import profilPic from "../assests/images/pictry.png";

export default function Cards() {
    //** Ici j'ai besoin d'une variable tableau qui stocke tous les monkeys
    //** La logique pour aller chercher les monkeys
    //** Et quoi d'autres ?
    //** La logique pour les afficher un par un ?
    return (
        <div className="flex flex-col items-center p-5 gap-5 h-68 w-48 box-border border-2 rounded-md shadow-xl border-gray-400 bg-gray-100 hover:animate-soft-zoom xs:scale-80 xs:hover:animate-none">
            <Image src={profilPic} alt="Gif" className="w-48 rounded-md"></Image>
            <h1>TITRE</h1>
            <p>Description</p>
        </div>
    );
}
