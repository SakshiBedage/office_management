import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios

function Pipeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Fetch timeline data from the backend API using Axios
    const fetchTimelineData = async () => {
      try {
        const response = await axios.get("/api/timeline");
        setTimelineData(response.data); // Assuming the response data is an array of timeline items
      } catch (error) {
        console.error("Error fetching timeline data:", error);
      }
    };

    fetchTimelineData();
  }, []);

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div className="card pb-2">
          <div className="p-4">
            <div className="row">
              <div className="col-xl-12 mb-40">
                <h4 className="mb-3">Pipeline</h4>
                <p></p>
              </div>

              <div className="col-xl-12">
                <div id="timeline-wrap">
                  <ul className="timeline">
                    {timelineData.map((event, index) => (
                      <li key={index} className="event" data-date={event.date}>
                        <span>{event.time}</span>
                        <h4>{event.heading}</h4>
                        <p>{event.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pipeline;
