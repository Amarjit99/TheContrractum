import React, { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const VisitorCounter = () => {
    const [count, setCount] = useState(null); // null = not yet loaded

    useEffect(() => {
        // Read stored count
        const raw = localStorage.getItem("visitorCount");
        let stored = raw ? parseInt(raw, 10) : 0;

        // Only count once per browser session (not on every refresh)
        if (!sessionStorage.getItem("counted")) {
            stored = stored + 1;
            localStorage.setItem("visitorCount", String(stored));
            sessionStorage.setItem("counted", "1");
        }

        // Animate count from 0 to stored
        let current = 0;
        setCount(0);

        const total = stored;
        const steps = Math.min(total, 60); // max 60 animation frames
        const increment = Math.ceil(total / steps);
        const delay = Math.max(20, Math.floor(1000 / steps));

        const timer = setInterval(() => {
            current += increment;
            if (current >= total) {
                current = total;
                clearInterval(timer);
            }
            setCount(current);
        }, delay);

        return () => clearInterval(timer);
    }, []);

    if (count === null) return null; // hide until JS runs

    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
            <Eye size={14} className="text-red-400" />
            <span className="text-gray-400 text-xs">
                <span className="text-white font-bold">{count.toLocaleString()}</span>
                &nbsp;visitors
            </span>
        </div>
    );
};

export default VisitorCounter;
