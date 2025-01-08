interface SupremacyTableProps {
  supremacy: {
    military: boolean;
    scientific: boolean;
  };
  setSupremacy: (value: { military: boolean; scientific: boolean }) => void;
  player1: string;
  player2: string;
  militaryWinner: string;
  scientificWinner: string;
  setMilitaryWinner: (player: string) => void;
  setScientificWinner: (player: string) => void;
}

const SupremacyTable = ({ 
  supremacy, 
  setSupremacy, 
  player1,
  player2,
  militaryWinner,
  scientificWinner,
  setMilitaryWinner,
  setScientificWinner
}: SupremacyTableProps) => {
  return (
    <table className="supremacy-table">
      <thead>
        <tr>
          <th className="bg-duel-header text-white font-serif text-xl py-3 px-4">
            Supremacy
          </th>
          <th className="bg-duel-header text-white font-serif text-xl py-3 px-4">
            Achieved
          </th>
          <th className="bg-duel-header text-white font-serif text-xl py-3 px-4">
            Winner
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 text-duel-military font-semibold">Military</td>
          <td className="py-2 px-4">
            <input
              type="checkbox"
              checked={supremacy.military}
              onChange={(e) =>
                setSupremacy({ ...supremacy, military: e.target.checked })
              }
              className="w-5 h-5 accent-duel-military"
            />
          </td>
          <td className="py-2 px-4">
            <select
              value={militaryWinner}
              onChange={(e) => setMilitaryWinner(e.target.value)}
              disabled={!supremacy.military}
              className="w-full p-2 border rounded"
            >
              <option value="">Select winner</option>
              <option value={player1}>{player1}</option>
              <option value={player2}>{player2}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-duel-science font-semibold">Scientific</td>
          <td className="py-2 px-4">
            <input
              type="checkbox"
              checked={supremacy.scientific}
              onChange={(e) =>
                setSupremacy({ ...supremacy, scientific: e.target.checked })
              }
              className="w-5 h-5 accent-duel-science"
            />
          </td>
          <td className="py-2 px-4">
            <select
              value={scientificWinner}
              onChange={(e) => setScientificWinner(e.target.value)}
              disabled={!supremacy.scientific}
              className="w-full p-2 border rounded"
            >
              <option value="">Select winner</option>
              <option value={player1}>{player1}</option>
              <option value={player2}>{player2}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SupremacyTable;