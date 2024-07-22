import Header from "./components/header";
import Footer from "./components/footer";
import MonkeysGif from "./components/monkeysGif";
import FishesGif from "./components/fishesGif";
import TrendingGif from "./components/trendingGif";
import ThreeScene from "./threeScene";

const Index = () => {
    return (
        <main>
            <ThreeScene />
            <Header></Header>
            <TrendingGif></TrendingGif>
            <MonkeysGif></MonkeysGif>
            <FishesGif></FishesGif>
            <Footer></Footer>
        </main>
    );
};

export default Index;
