import Image from "next/image";
import FavoriteIcon from "/public/icons/favoriteIcon.svg";
import FavoriteIconFilled from "/public/icons/favoriteIconFilled.svg";
import React, { useState } from "react";

export default function ToggleButton() {
    const [isToggled, setIsToggled] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled);
    };

    return (
        <button onClick={handleChange} className={`toggle-button ${isToggled ? "on" : "off"} absolute top-3 right-3 z-1`}>
            {isToggled ? (
                <Image src={FavoriteIconFilled} alt="favoriteIcon" width={20} height={20}></Image>
            ) : (
                <Image src={FavoriteIcon} alt="favoriteIcon" width={20} height={20}></Image>
            )}
        </button>
    );
}
