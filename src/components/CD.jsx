import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function CDPlayer({ src, image, alt, song, isPlaying, onPlay, onStop }) {
    const musicRef = useRef(null);

    useEffect(() => {
        musicRef.current = new Audio(src);
        return () => {
            musicRef.current.pause();
            musicRef.current = null;
        };
    }, [src]);

    useEffect(() => {
        if (!musicRef.current) return;
        if (isPlaying) {
            musicRef.current.play().catch((e) => console.error("Playback failed:", e));
        } else {
            musicRef.current.pause();
            musicRef.current.currentTime = 0;
        }
    }, [isPlaying]);

    const toggle = () => {
        if (isPlaying) {
            onStop();
        } else {
            onPlay();
        }
    };

    return (
        <div className="bg-gray-800 rounded-2xl p-8 pb-16 flex items-center justify-center relative overflow-hidden">
            <motion.div className="w-48 h-48 rounded-full bg-gray-800 relative cursor-pointer"
                onClick={toggle}
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={isPlaying ? { repeat: Infinity, duration: 2.5, ease: "linear", repeatType: "loop" } : { duration: 1 }}
                style={{ boxShadow: '0 -5px 30px rgba(96, 165, 250, 0.9)' }}
            >
                <img src={image} alt={alt} className="w-48 h-48 absolute rounded-full top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 border-4 border-gray-700"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                w-10 h-10 rounded-full bg-gray-900 border-4 border-gray-600"/>
            </motion.div>

            <motion.div className="absolute right-3 -translate-y-7"
                animate={{ rotate: isPlaying ? 46 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'top center' }}
            >
                <div className="w-2 h-39 bg-gray-600 rounded-lg relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-900 rounded-full"/>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 w-full bg-gray-900 py-2 px-3">
                <p className="text-blue-300 text-xs font-semibold truncate">{alt}</p>
                <p className="text-gray-400 text-xs truncate">{song}</p>
            </div>
        </div>
    );
}

export default CDPlayer;