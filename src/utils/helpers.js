export const generateFireflies = (count = 15) => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 10}s`,
        color: Math.random() > 0.5 ? '#ffeb3b' : '#ffc107',
        size: `${1.5 + Math.random() * 1.5}px`
    }));
};
