import { useEffect, useState } from "react";

function Typeeffect({
    text,
    typingspeed = 100,
    deltingspeed = 50,
    duration = 1000
}) {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[index].length) {
                    setDisplayedText(prev => prev + text[index].charAt(displayedText.length));
                } else {
                    setTimeout(() => setIsDeleting(true), duration);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(prev => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex(prev => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deltingspeed : typingspeed
        );

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, typingspeed, deltingspeed, duration]);

    return (
        <div className="typing-effect">
            {displayedText}|
            <span className=""></span>
        </div>
    );
}

export default Typeeffect;
