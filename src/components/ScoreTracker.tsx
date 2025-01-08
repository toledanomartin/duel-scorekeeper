import { useState } from "react";
import ScoreTable from "./ScoreTable";
import SupremacyTable from "./SupremacyTable";

const ScoreTracker = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [scores, setScores] = useState({
    blueCards: [0, 0],
    greenCards: [0, 0],
    yellowCards: [0, 0],
    guildCards: [0, 0],
    wonders: [0, 0],
    progressTokens: [0, 0],
    coins: [0, 0],
    conflicts: [0, 0],
  });

  const [supremacy, setSupremacy] = useState({
    military: false,
    scientific: false,
  });

  const updateScore = (category: keyof typeof scores, playerIndex: 0 | 1, value: string) => {
    const numValue = value === "" ? 0 : parseInt(value);
    if (isNaN(numValue)) return;

    setScores((prev) => ({
      ...prev,
      [category]: [
        playerIndex === 0 ? numValue : prev[category][0],
        playerIndex === 1 ? numValue : prev[category][1],
      ],
    }));
  };

  const calculateTotal = (playerIndex: 0 | 1) => {
    return Object.entries(scores).reduce((total, [category, values]) => {
      if (category === "coins") {
        return total + Math.floor(values[playerIndex] / 3);
      }
      return total + values[playerIndex];
    }, 0);
  };

  return (
    <div className="container mx-auto">
      <ScoreTable
        player1={player1}
        player2={player2}
        setPlayer1={setPlayer1}
        setPlayer2={setPlayer2}
        scores={scores}
        updateScore={updateScore}
        calculateTotal={calculateTotal}
      />
      <SupremacyTable
        supremacy={supremacy}
        setSupremacy={setSupremacy}
      />
    </div>
  );
};

export default ScoreTracker;