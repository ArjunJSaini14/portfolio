import { useState, useEffect } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';

function scramble(target, progress) {
    return target
        .split('')
        .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < progress) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
}

function ScrambleText({ text, delay = 0, className = '' }) {
    const [display, setDisplay] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(startTimer);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let progress = 0;
        let frame = 0;

        const interval = setInterval(() => {
            frame++;
            if (frame % 4 === 0) progress++;
            setDisplay(scramble(text, progress));
            if (progress >= text.length) clearInterval(interval);
        }, 60);

        return () => clearInterval(interval);
    }, [started, text]);

    return <span className={className}>{display || '\u00A0'.repeat(text.length)}</span>;
}

function Hero() {
    const [showBio, setShowBio] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShowBio(true), 2000);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="flex flex-col items-center justify-start pt-45 pb-10 px-8">
            <div className="text-6xl font-bold font-mono">
                <ScrambleText text="hi, i'm " delay={0} />
                <ScrambleText text="arjun" delay={300} className="text-blue-300" />
                <ScrambleText text="." delay={900} />
            </div>

            <div className={`mt-8 max-w-2xl transition-opacity duration-1000 ease-in-out ${
                showBio ? 'opacity-100' : 'opacity-0'
            }`}>
                <p className="text-xl text-gray-500 leading-relaxed text-center">
                    I'm an aspiring software engineer based in Boston. Currently I am a junior at Northeastern University and am 
                    passionate about creating elegant solutions to complex problems. Take a tour :)
                </p>
            </div>
        </section>
    );
}

export default Hero;