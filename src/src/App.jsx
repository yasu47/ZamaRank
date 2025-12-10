import { useState } from "react";

// ✅ SAMPLE ZAMA LEADERBOARD DATA (Edit anytime)
const leaderboard = {
  "24h": [
    { handle: "0x_madara_", rank: 1, points: 845 },
    { handle: "yashuweb3", rank: 2, points: 790 },
    { handle: "cryptosheru", rank: 3, points: 700 }
  ],
  "7d": [
    { handle: "0x_madara_", rank: 1, points: 5420 },
    { handle: "cryptoking", rank: 2, points: 4800 },
    { handle: "yashuweb3", rank: 3, points: 4300 }
  ],
  "30d": [
    { handle: "zama_alpha", rank: 1, points: 18450 },
    { handle: "0x_madara_", rank: 2, points: 16200 },
    { handle: "yashuweb3", rank: 3, points: 15100 }
  ]
};

function findRank(list, handle) {
  return list.find((x) => x.handle.toLowerCase() === handle);
}

export default function App() {
  const [handle, setHandle] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const searchRank = () => {
    const clean = handle.replace("@", "").toLowerCase().trim();
    if (!clean) {
      setError("Bhai handle to daal 😭");
      setResult(null);
      return;
    }

    const r24 = findRank(leaderboard["24h"], clean);
    const r7 = findRank(leaderboard["7d"], clean);
    const r30 = findRank(leaderboard["30d"], clean);

    setResult({ handle: clean, r24, r7, r30 });
    setError("");
  };

  const shareOnX = () => {
    const text = `My ZAMA Rank 🚀
24h: ${result?.r24 ? "#" + result.r24.rank : "Unranked"}
7d: ${result?.r7 ? "#" + result.r7.rank : "Unranked"}
30d: ${result?.r30 ? "#" + result.r30.rank : "Unranked"}

Powered by @YashuWeb3`;

    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#facc15", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ backgroundColor: "black", color: "#facc15", width: "100%", maxWidth: 400, padding: 20, borderRadius: 16 }}>
        <h1 style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
          ZAMA Rank Checker
        </h1>

        <p style={{ textAlign: "center", fontSize: 12, marginBottom: 10 }}>
          ZAMA Grind Never Stops
        </p>

        <p style={{ textAlign: "center", fontSize: 10, marginBottom: 20 }}>
          Powered by @YashuWeb3
        </p>

        <div style={{ display: "flex", gap: 8 }}>
          <input
            style={{ flex: 1, padding: 8, borderRadius: 8 }}
            placeholder="@yourhandle"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
          <button
            onClick={searchRank}
            style={{ backgroundColor: "#facc15", color: "black", padding: "8px 12px", borderRadius: 8, fontWeight: "bold" }}
          >
            Check
          </button>
        </div>

        {error && (
          <div style={{ backgroundColor: "red", color: "white", marginTop: 12, padding: 8, borderRadius: 8, textAlign: "center" }}>
            {error}
          </div>
        )}

        {result && (
          <div style={{ marginTop: 20, backgroundColor: "#facc15", color: "black", padding: 12, borderRadius: 12 }}>
            <h2 style={{ fontSize: 18, fontWeight: "bold" }}>@{result.handle}</h2>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>24 Hours</span>
              <span>{result.r24 ? `#${result.r24.rank} (${result.r24.points} pts)` : "Unranked 💀"}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>7 Days</span>
              <span>{result.r7 ? `#${result.r7.rank} (${result.r7.points} pts)` : "Unranked 💀"}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>30 Days</span>
              <span>{result.r30 ? `#${result.r30.rank} (${result.r30.points} pts)` : "Unranked 💀"}</span>
            </div>

            <button
              onClick={shareOnX}
              style={{ width: "100%", marginTop: 12, backgroundColor: "black", color: "#facc15", padding: 10, borderRadius: 8, fontWeight: "bold" }}
            >
              Share on X 🚀
            </button>
          </div>
        )}

        <p style={{ fontSize: 10, textAlign: "center", marginTop: 20 }}>
          Community-made Zama Rank Tool • Not Official
        </p>
      </div>
    </div>
  );
}
