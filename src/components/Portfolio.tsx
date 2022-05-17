import { FC } from "react";

import { useState, useEffect } from "react";
import { client, urlFor } from "../client";

interface Tags {
    label: string;
}

interface Data {
    title: string;
    website: string;
    github: string;
    image: string;
    tags: Array<Tags>;
    // tags: {
    //     label: string;
    // }[];
}

const Portfolio: FC = () => {
    const [data, setData] = useState<Array<Data>>([]);

    useEffect(() => {
        const query = `*[_type == 'portfolios']`;

        client.fetch(query).then((data) => {
            setData(data);
        });
    }, []);

    console.log(data);

    return (
        <div className="w-full py-6 text-center md:py-10">
            <div className="container max-w-6xl px-8 py-4 m-auto md:px-0">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {data.map((portfolio: Data, index: number) => (
                        <div
                            className="relative transition ease-in-out delay-150 group"
                            key={index}
                        >
                            <div className="group-hover:bg-gradient-to-r from-teal-400 to-blue-400 opacity-90">
                                <img
                                    src={urlFor(portfolio.image).url()}
                                    alt="webcourz"
                                    width=""
                                    height=""
                                    className="group-hover:opacity-20"
                                />
                            </div>
                            <div className="absolute top-0 invisible w-full h-full group-hover:visible">
                                <div className="flex flex-col items-center justify-center h-full gap-6">
                                    <h2 className="font-mono text-4xl font-bold text-white uppercase">
                                        {portfolio.title}
                                    </h2>
                                    <div className="inline-flex gap-2">
                                        <a
                                            href={portfolio.website}
                                            rel="noreferrer"
                                            target="_blank"
                                            className="font-semibold text-white underline text-md"
                                        >
                                            Website
                                        </a>
                                        <a
                                            href={portfolio.github}
                                            rel="noreferrer"
                                            target="_blank"
                                            className="font-semibold text-white underline text-md"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                    <div className="inline-flex gap-2">
                                        {portfolio.tags.map((tag, index) => (
                                            <span
                                                className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 inline-flex"
                                                key={index}
                                            >
                                                {tag.label}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
