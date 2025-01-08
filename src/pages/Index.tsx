import ScoreTracker from "@/components/ScoreTracker";

const Index = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-serif text-duel-header text-center mb-8">
        7 Wonders: Duel Score Tracker
      </h1>
      <ScoreTracker />
    </div>
  );
};

export default Index;