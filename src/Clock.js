// rfce
import React, { useEffect, useState } from 'react';
import './Clock.css';

function Clock() {
    const [zaman, setZaman] = useState(new Date());

    const guncelle = function() {
        setZaman(new Date());
    };

    useEffect(() => {
        const timerId = setInterval(guncelle, 1000);

        // unmount: timer'ı temizle
        return (() => clearInterval(timerId));
    }, []);

    return (
        <div className="Clock">
            {zaman.toLocaleTimeString()}
        </div>
    );
}

export default Clock;
