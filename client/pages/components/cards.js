import Image from "next/image";

export default function Cards({ title, description, imageUrl }) {
    return (
        <div className="flex flex-col items-center p-5 gap-5 h-68 w-48 box-border border-2 rounded-md shadow-xl border-gray-400 bg-gray-100 hover:animate-soft-zoom xs:scale-80 xs:hover:animate-none">
            <Image src={imageUrl} alt={title} className="rounded-md" width={48} height={48} unoptimized="true"></Image>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
