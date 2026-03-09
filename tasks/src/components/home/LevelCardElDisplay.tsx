import { ExtraLearningsCard } from "../../layouts/HomePageCard";

export const LevelCardElDisplay = () => {
  return (
    <div className="grid grid-cols-3 gap-7 mt-4">
      <ExtraLearningsCard
        faculty="Web Development"
        title="React.js"
        description="Build dynamic user interfaces using resuable components, state management, and modern frontend architecture with React."
      />
      <ExtraLearningsCard
        faculty="Big Data"
        title="Apache Spark"
        description="A fast, unified analytics engine for large-scale data processing with built-in modules for streaming, SQL, machine learning, and graph..."
      />
      <ExtraLearningsCard
        faculty="Web Development"
        title="Express.js"
        description="Develop scalable backend APIs and server-side logic using minimal and flexible Node.js-powered Express framweork."
      />
    </div>
  );
};
