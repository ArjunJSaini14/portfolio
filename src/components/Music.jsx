import { motion } from "framer-motion";
import { useState } from "react";
import CDPlayer from "./CD";

const withBasePath = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const tracks = [
    { src: withBasePath("feellike.mp3"), image: withBasePath("aaron.png"), alt: "Aaron May", song: "Feel Like" },
    { src: withBasePath("ASAP.mp3"), image: withBasePath("ASAP.jpg"), alt: "A$AP Rocky", song: "Houston Old Head" },
    { src: withBasePath("tension.mp3"), image: withBasePath("jaxon.png"), alt: "Jaxon Mune", song: "Tension" },
    { src: withBasePath("nophotos.wav"), image: withBasePath("nophotos.png"), alt: "Don Toliver", song: "No Photos" },
    { src: withBasePath("gambino.wav"), image: withBasePath("summer.png"), alt: "Childish Gambino", song: "Feel Like Summer" },
    { src: withBasePath("menitrust.wav"), image: withBasePath("lauren.png"), alt: "Men I Trust", song: "Lauren" },
];

function Music() {
    const [playingId, setPlayingId] = useState(null);

    return (
        <section id="music" className="flex w-full flex-col mt-55 justify-center items-start px-4 max-w-5xl mx-auto">
            <motion.div 
                className="flex items-center w-full"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="pr-3 text-4xl font-semibold whitespace-nowrap text-blue-300">&gt; music : click & enjoy</h2>
                <div className="grow border-t-[0.5px] border-gray-300 translate-y-2"></div>
            </motion.div>

            <motion.div className="flex gap-18 mt-10 w-full items-start justify-center flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {tracks.map((track) => (
                    <CDPlayer 
                        key={track.src} 
                        {...track}
                        isPlaying={playingId === track.src}
                        onPlay={() => setPlayingId(track.src)}
                        onStop={() => setPlayingId(null)}
                    />
                ))}
            </motion.div>

            <p className="text-gray-500 text-sm mt-16 pb-3 w-full text-center">Arjun Saini 2026</p>
        </section>
    );
}

export default Music;