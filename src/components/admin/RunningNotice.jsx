import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function RunningNotice() {
  const [latestNotice, setLatestNotice] = useState(null);

  useEffect(() => {
    axios
      .get("https://prabisvg.com/phpbox/fetchnotice.php")
      .then((response) => {
        // Extract the latest notice from the response data
        const notices = response.data.data;
        if (notices.length > 0) {
          const latest = notices[notices.length - 1];
          setLatestNotice(latest);
        }
      })
      .catch((error) => {
        console.error("Error fetching notices:", error);
      });
  }, []);

  return (
    <div>
      <div className="w-full bg-gray-200 text-center h-6">
        <Marquee
          pauseOnHover={true}
          className="text-blue-900 font-serif text-lg z-50 px-3 py-0"
        >
          <br />
          {latestNotice
            ? `Notice: ${latestNotice.details}`
            : "No details available"}
        </Marquee>
      </div>
    </div>
  );
}

export default RunningNotice;
