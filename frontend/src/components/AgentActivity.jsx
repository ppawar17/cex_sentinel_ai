function AgentActivity() {
  const agents = [
    {
      agent: "Detection Agent",
      status: "Running"
    },
    {
      agent: "RCA Agent",
      status: "Completed"
    },
    {
      agent: "Recommendation Agent",
      status: "Completed"
    },
    {
      agent: "Supervisor Agent",
      status: "Monitoring"
    }
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-2xl font-bold mb-6">
        Agent Activity
      </h2>

      <div className="space-y-4">
        {agents.map((a, i) => (
          <div
            key={i}
            className="flex justify-between text-white"
          >
            <span>{a.agent}</span>

            <span className="text-green-400">
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentActivity;