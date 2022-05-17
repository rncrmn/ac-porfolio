import { FC } from "react";
import { Footer, Intro, Navbar, Portfolio } from "./components";

const App: FC = () => {
    return (
        <div className="bg-black">
            <Navbar />
            <Intro />
            <Portfolio />
            <Footer />
        </div>
    );
};

export default App;
