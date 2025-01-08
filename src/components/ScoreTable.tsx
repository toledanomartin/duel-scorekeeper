interface ScoreTableProps {
  player1: string;
  player2: string;
  setPlayer1: (name: string) => void;
  setPlayer2: (name: string) => void;
  scores: {
    blueCards: number[];
    greenCards: number[];
    yellowCards: number[];
    guildCards: number[];
    wonders: number[];
    progressTokens: number[];
    coins: number[];
    conflicts: number[];
  };
  updateScore: (category: string, playerIndex: 0 | 1, value: string) => void;
  calculateTotal: (playerIndex: 0 | 1) => number;
}

const ScoreTable = ({
  player1,
  player2,
  setPlayer1,
  setPlayer2,
  scores,
  updateScore,
  calculateTotal,
}: ScoreTableProps) => {
  const categories = [
    { key: "blueCards", label: "Blue Cards" },
    { key: "greenCards", label: "Green Cards" },
    { key: "yellowCards", label: "Yellow Cards" },
    { key: "guildCards", label: "Guild Cards" },
    { key: "wonders", label: "Wonders" },
    { key: "progressTokens", label: "Progress Tokens" },
    { key: "coins", label: "Coins" },
    { key: "conflicts", label: "Conflicts" },
  ];

  return (
    <table className="score-table">
      <thead>
        <tr>
          <th className="w-1/3">Category</th>
          <th className="w-1/3">
            <input
              type="text"
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              placeholder="Player 1"
              className="w-full bg-transparent text-center text-white placeholder-white/50"
            />
          </th>
          <th className="w-1/3">
            <input
              type="text"
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              placeholder="Player 2"
              className="w-full bg-transparent text-center text-white placeholder-white/50"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {categories.map(({ key, label }) => (
          <tr key={key}>
            <td>{label}</td>
            <td>
              <input
                type="number"
                value={scores[key as keyof typeof scores][0] || ""}
                onChange={(e) => updateScore(key, 0, e.target.value)}
                min="0"
              />
            </td>
            <td>
              <input
                type="number"
                value={scores[key as keyof typeof scores][1] || ""}
                onChange={(e) => updateScore(key, 1, e.target.value)}
                min="0"
              />
            </td>
          </tr>
        ))}
        <tr className="font-bold">
          <td>Total</td>
          <td>{calculateTotal(0)}</td>
          <td>{calculateTotal(1)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreTable;