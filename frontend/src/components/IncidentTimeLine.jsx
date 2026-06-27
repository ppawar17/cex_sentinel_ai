function IncidentTimeline() {
  const incidents = [
    {
      time: "10:02 AM",
      event: "Latency crossed 4500 ms"
    },
    {
      time: "10:03 AM",
      event: "Detection Agent triggered"
    },
    {
      time: "10:04 AM",
      event: "RCA Agent identified payment service"
    },
    {
      time: "10:06 AM",
      event: "Recommendation generated"
    }
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Incident Timeline
      </h2>

      <div className="space-y-4">
        {incidents.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-red-500 pl-4"
          >
            <p className="text-red-400">
              {item.time}
            </p>

            <p className="text-white">
              {item.event}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncidentTimeline;