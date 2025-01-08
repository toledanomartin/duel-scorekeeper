import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScoreTable from "./ScoreTable";
import SupremacyTable from "./SupremacyTable";

const ScoreTracker = () => {
  const navigate = useNavigate();
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

  const [militaryWinner, setMilitaryWinner] = useState("");
  const [scientificWinner, setScientificWinner] = useState("");

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

  const handleFinishGame = () => {
    if (!player1 || !player2) {
      alert("Please enter both player names before finishing the game.");
      return;
    }

    if (supremacy.military && !militaryWinner) {
      alert("Please select a winner for military supremacy.");
      return;
    }

    if (supremacy.scientific && !scientificWinner) {
      alert("Please select a winner for scientific supremacy.");
      return;
    }

    navigate("/results", {
      state: {
        player1,
        player2,
        scores: {
          player1Total: calculateTotal(0),
          player2Total: calculateTotal(1),
        },
        supremacy: {
          ...supremacy,
          militaryWinner,
          scientificWinner,
        },
      },
    });
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
        player1={player1}
        player2={player2}
        militaryWinner={militaryWinner}
        scientificWinner={scientificWinner}
        setMilitaryWinner={setMilitaryWinner}
        setScientificWinner={setScientificWinner}
      />
      <div className="mt-8 flex justify-center">
        <Button
          onClick={handleFinishGame}
          className="px-8 py-4 text-lg"
        >
          Finish Game
        </Button>
      </div>
    </div>
  );
};

export default ScoreTracker;