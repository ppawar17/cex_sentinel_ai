function MetricCard({ title, value }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
      <p className="text-gray-400 text-2xl mb-6">
        {title}
      </p>

      <h2 className="text-white text-6xl font-bold">
        {value}
      </h2>
    </div>
  );
}

export default MetricCard;