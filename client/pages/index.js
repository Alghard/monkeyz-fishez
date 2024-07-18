import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MonkeysGif from "./components/monkeysGif";
import FishesGif from "./components/fishesGif";
import TrendingGif from "./components/trendingGif";

export default function Home() {
    return (
        <main>
            <Header></Header>
            <TrendingGif></TrendingGif>
            <MonkeysGif></MonkeysGif>
            <FishesGif></FishesGif>
            <Footer></Footer>
        </main>
    );
}
