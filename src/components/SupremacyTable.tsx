interface SupremacyTableProps {
  supremacy: {
    military: boolean;
    scientific: boolean;
  };
  setSupremacy: (value: { military: boolean; scientific: boolean }) => void;
}

const SupremacyTable = ({ supremacy, setSupremacy }: SupremacyTableProps) => {
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
        </tr>
      </tbody>
    </table>
  );
};

export default SupremacyTable;