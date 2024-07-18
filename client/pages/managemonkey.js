import React, { useEffect, useState } from "react";
import MonkeyAddForm from "./components/addForm";
import Cards from "./components/cards";
import MonkeyList from "./components/monkeyList";

export default function Home() {
    return (
        <main className="bg-slate-800">
          <MonkeyAddForm />
          <MonkeyList />
        </main>
    );
}
