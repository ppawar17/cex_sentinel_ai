import { useEffect, useState } from "react";

import MetricCard from "./components/MetricCard";
import IncidentTimeline from "./components/IncidentTimeline";
import AgentActivity from "./components/AgentActivity";
import RevenueChart from "./components/RevenueChart";
import AIChat from "./components/AIChat";

import API from "./services/api";

function App() {
    const [recommendation, setRecommendation] = useState({});

    const [metrics, setMetrics] = useState({
      active_incidents: 0,
      p1_incidents: 0,
      mttr: "-",
      revenue_impact: "-"
    });

    const [incidents, setIncidents] = useState([]);

useEffect(() => {

  const loadData = () => {
    API.get("/metrics")
      .then((res) => {
        setMetrics(res.data);
      });

    API.get("/incidents")
      .then((res) => {
        setIncidents(res.data);
      });

    API.get("/recommendation")
    .then((res) => {
      setRecommendation(res.data);
    });
  };

  loadData();

  const interval = setInterval(() => {
    loadData();
  }, 10000);

  return () => clearInterval(interval);

}, []);

  return (
    <div className="bg-slate-950 min-h-screen p-8">
      <div className="max-w-screen-2xl mx-auto">

        {/* Header */}
        <h1 className="text-white text-6xl font-bold text-center mb-10">
          CeX Sentinel AI
        </h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <MetricCard
            title="Active Incidents"
            value={metrics.active_incidents}
          />

          <MetricCard
            title="P1 Incidents"
             value={metrics.p1_incidents}
          />

          <MetricCard
            title="MTTR"
            value={metrics.mttr}
          />

          <MetricCard
            title="Revenue Impact"
            value={metrics.revenue_impact}
          />

        </div>

        {/* Incidents + AI Recommendation */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Active Incidents */}
          <div className="lg:col-span-2 bg-slate-800 rounded-2xl p-6 shadow-lg">

            <h2 className="text-white text-3xl font-bold mb-6">
              Active Incidents
            </h2>

            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-slate-700 text-gray-400">
                  <th className="text-left py-4">Incident</th>
                  <th className="text-left py-4">Service</th>
                  <th className="text-left py-4">Severity</th>
                  <th className="text-left py-4">Status</th>
                </tr>
              </thead>

<tbody>
  {incidents.map((incident) => (
    <tr
      key={incident.id}
      className="border-b border-slate-700 hover:bg-slate-700"
    >
      <td className="py-5">{incident.id}</td>

      <td>{incident.service}</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            incident.severity === "P1"
              ? "bg-red-600"
              : incident.severity === "P2"
              ? "bg-orange-500"
              : "bg-yellow-500"
          }`}
        >
          {incident.severity}
        </span>
      </td>

      <td
        className={
          incident.status === "Active"
            ? "text-red-400"
            : incident.status === "Investigating"
            ? "text-yellow-400"
            : "text-green-400"
        }
      >
        {incident.status}
      </td>
    </tr>
  ))}
</tbody>
            </table>

          </div>

          {/* AI Recommendation */}
          <div className="bg-slate-800 rounded-2xl p-6 shadow-lg">

            <h2 className="text-white text-3xl font-bold mb-6">
              AI Recommendation
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-gray-400 mb-2">
                  Root Cause
                </p>

                <p className="text-white">
                  {recommendation.root_cause}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Recommendation
                </p>

                <p className="text-green-400">
                  {recommendation.recommendation}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Confidence Score
                </p>

                <p className="text-white text-3xl font-bold">
                  {recommendation.confidence}
                </p>
              </div>

              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl">
                Execute Rollback
              </button>

            </div>

          </div>

        </div>

        {/* Timeline + Agent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <IncidentTimeline />

          <AgentActivity />

        </div>

        {/* Revenue Chart + AI Chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <RevenueChart />

          <AIChat />

        </div>

      </div>
    </div>
  );
}

export default App;