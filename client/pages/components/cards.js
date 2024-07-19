import Image from "next/image";

export default function Cards({ title, description, imageUrl }) {
    return (
        <div className="flex flex-col items-center text-center justify-between p-5 h-96 w-72 box-border border-2 rounded-md shadow-xl border-gray-400 bg-gray-100 hover:animate-soft-zoom  xs:hover:animate-none overflow-hidden">
            <Image
                src={imageUrl}
                alt={title}
                className="rounded-md h-40 w-40 m-5 object-cover"
                width={20}
                height={20}
                unoptimized="true"
            ></Image>
            <h1 className="font-poppins font-bold mb-2">{title}</h1>
            <p className="font-poppins max-h-16 max-w-40 text-sm">{description}</p>
        </div>
    );
}
