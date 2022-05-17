import { FC } from "react";
import aaronCarmen from "../assets/img/aaron-carmen.png";

const Intro: FC = () => {
    return (
        <div className="w-full py-6">
            <div className="container max-w-6xl px-8 py-4 m-auto text-center md:px-0">
                <img
                    src={aaronCarmen}
                    alt="Aaron Carmen"
                    width="180"
                    height="180"
                    className="m-auto mb-6"
                />
                <p className="font-mono text-2xl font-bold leading-snug text-white md:text-5xl">
                    My name is Aaron, a{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300">
                        Web3 & WordPress Developer
                    </span>{" "}
                    and a coffee addict living somewhere in the Philippines.
                </p>
            </div>
        </div>
    );
};

export default Intro;
