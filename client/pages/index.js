import { Inter } from "next/font/google";
import dbConnect from "../lib/dbConnect";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MonkeysGif from "./components/monkeysGif";
import FishesGif from "./components/fishesGif";
import TrendingGif from "./components/trendingGif";
import Monkey from "../models/Monkey";
import MonkeyList from "./components/monkeyList";

const Index = ({ monkeys }) => {
    return (
        <main>
            <Header></Header>
            <TrendingGif></TrendingGif>
            <MonkeysGif></MonkeysGif>
            <FishesGif></FishesGif>
            <Footer></Footer>
        </main>
    );
};

/* Retrieves monkeys data from mongodb database */
export async function getServerSideProps() {
    await dbConnect();

    /* find all the data in our database */
    const result = await Monkey.find({});

    /* Ensures all objectIds and nested objectIds are serialized as JSON data */
    const monkeys = result.map((doc) => {
        const monkeys = JSON.parse(JSON.stringify(doc));
        return monkeys;
    });

    return { props: { monkeys: monkeys } };
}

export default Index;
