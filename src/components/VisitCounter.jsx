// src/VisitorCounter.js
import React, { useEffect } from 'react';

const VisitorCounter = () => {
    useEffect(() => {
        // Create the script element
        const script = document.createElement('script');
        script.src = "https://counter4.optistats.ovh/private/counter.js?c=n9w1cdym97dzzkajjxkrwj2a7jxrc1sd&down=async";
        script.async = true;

        // Append the script to the body
        document.body.appendChild(script);

        // Cleanup script on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="sfcn9w1cdym97dzzkajjxkrwj2a7jxrc1sd"></div>
            <noscript>
                <a href="https://www.freecounterstat.com" title="web visitor counter">
                    <img 
                        src="https://counter4.optistats.ovh/private/freecounterstat.php?c=n9w1cdym97dzzkajjxkrwj2a7jxrc1sd" 
                        border="0" 
                        title="web visitor counter" 
                        alt="web visitor counter" 
                    />
                </a>
            </noscript>
        </div>
    );
};

export default VisitorCounter;
