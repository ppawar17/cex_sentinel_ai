function AIChat() {
  return (
    <div className="bg-slate-800 rounded-2xl p-6">
      <h2 className="text-white text-2xl mb-6">
        Ask Sentinel AI
      </h2>

      <input
        type="text"
        placeholder="Why did this incident happen?"
        className="w-full p-3 rounded bg-slate-700 text-white"
      />

      <div className="mt-4 text-gray-300">
        Payment service latency increased
        immediately after deployment v2.1.
        Recommended action is rollback.
      </div>
    </div>
  );
}

export default AIChat;