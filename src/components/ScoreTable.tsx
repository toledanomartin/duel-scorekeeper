import { Circle, DollarSign, Pyramid, Shield, Square } from "lucide-react";

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
    { 
      key: "blueCards", 
      label: "Blue Cards",
      icon: <Square className="inline-block mr-2" size={18} fill="#0EA5E9" color="#0EA5E9" />,
      textColor: "text-[#0EA5E9]"
    },
    { 
      key: "greenCards", 
      label: "Green Cards",
      icon: <Square className="inline-block mr-2" size={18} fill="#059669" color="#059669" />,
      textColor: "text-[#059669]"
    },
    { 
      key: "yellowCards", 
      label: "Yellow Cards",
      icon: <Square className="inline-block mr-2" size={18} fill="#EAB308" color="#EAB308" />,
      textColor: "text-[#EAB308]"
    },
    { 
      key: "guildCards", 
      label: "Guild Cards",
      icon: <Square className="inline-block mr-2" size={18} fill="#8B5CF6" color="#8B5CF6" />,
      textColor: "text-[#8B5CF6]"
    },
    { 
      key: "wonders", 
      label: "Wonders",
      icon: <Pyramid className="inline-block mr-2" size={18} />,
      textColor: "text-gray-700"
    },
    { 
      key: "progressTokens", 
      label: "Progress Tokens",
      icon: <Circle className="inline-block mr-2" size={18} fill="#059669" color="#059669" />,
      textColor: "text-gray-700"
    },
    { 
      key: "coins", 
      label: "Coins",
      icon: <DollarSign className="inline-block mr-2" size={18} />,
      textColor: "text-gray-700"
    },
    { 
      key: "conflicts", 
      label: "Military Conflicts",
      icon: <Shield className="inline-block mr-2" size={18} fill="#DC2626" color="#DC2626" />,
      textColor: "text-[#DC2626]"
    },
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
        {categories.map(({ key, label, icon, textColor }) => (
          <tr key={key}>
            <td className={`flex items-center gap-1 ${textColor}`}>
              {icon}
              <span>{label}</span>
            </td>
            <td>
              <input
                type="number"
                value={scores[key as keyof typeof scores][0] || ""}
                onChange={(e) => updateScore(key, 0, e.target.value)}
                min="0"
                className="w-full text-center"
              />
            </td>
            <td>
              <input
                type="number"
                value={scores[key as keyof typeof scores][1] || ""}
                onChange={(e) => updateScore(key, 1, e.target.value)}
                min="0"
                className="w-full text-center"
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