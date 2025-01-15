import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface GameResult {
  player1: string;
  player2: string;
  scores: {
    player1Total: number;
    player2Total: number;
  };
  supremacy: {
    military: boolean;
    scientific: boolean;
    militaryWinner: string;
    scientificWinner: string;
  };
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as GameResult;

  const getWinner = () => {
    // Check for military supremacy
    if (result.supremacy.military) {
      return result.supremacy.militaryWinner;
    }
    // Check for scientific supremacy
    if (result.supremacy.scientific) {
      return result.supremacy.scientificWinner;
    }
    // If no supremacy, check points
    const { player1Total, player2Total } = result.scores;
    if (player1Total > player2Total) return result.player1;
    if (player2Total > player1Total) return result.player2;
    return "It's a tie!";
  };

  const getWinReason = () => {
    if (result.supremacy.military) {
      return "Military Supremacy Victory!";
    }
    if (result.supremacy.scientific) {
      return "Scientific Supremacy Victory!";
    }
    return "Victory by Points!";
  };

  const handleNewGame = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-serif text-duel-header text-center mb-8">
        Game Results
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            {getWinner() === "It's a tie!" ? "It's a tie!" : `${getWinner()} wins!`}
          </h2>
          <p className="text-lg text-gray-600 mb-4">{getWinReason()}</p>
          <div className="space-y-2">
            <p className={`text-xl ${result.scores.player1Total > result.scores.player2Total && !result.supremacy.military && !result.supremacy.scientific ? "font-bold text-green-600" : ""}`}>
              {result.player1}: {result.scores.player1Total} points
            </p>
            <p className={`text-xl ${result.scores.player2Total > result.scores.player1Total && !result.supremacy.military && !result.supremacy.scientific ? "font-bold text-green-600" : ""}`}>
              {result.player2}: {result.scores.player2Total} points
            </p>
          </div>
          {(result.supremacy.military || result.supremacy.scientific) && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <h3 className="font-semibold mb-2">Supremacy Achieved</h3>
              {result.supremacy.military && (
                <p className="text-red-600">Military Supremacy by {result.supremacy.militaryWinner}</p>
              )}
              {result.supremacy.scientific && (
                <p className="text-green-600">Scientific Supremacy by {result.supremacy.scientificWinner}</p>
              )}
            </div>
          )}
        </div>
        <Button
          onClick={handleNewGame}
          className="w-full"
        >
          Start New Game
        </Button>
      </div>
    </div>
  );
};

export default Results;