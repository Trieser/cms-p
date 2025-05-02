import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrewingLoader from "./components/BrewingLoader";
import MainContent from "./components/MainContent";
import { useState } from "react";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading ? (
                <BrewingLoader onComplete={() => setIsLoading(false)} />
            ) : (
                <>
                    <Navbar />
                    <MainContent />
                    <Footer />
                </>
            )}
        </>
    );
};

export default App;
