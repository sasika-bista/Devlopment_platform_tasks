import { LevelCard } from "../../layouts/HomePageCard";

export const LevelCardDisplay = () => {
  return (
    <div className="grid grid-cols-3 gap-7 ">
      <LevelCard
        faculty="Computer Science"
        title="Internet Software Architecture"
        description="Learn modern web development patterns, frameworks, and architectural
          principles for building scalable web applications."
        module="4CS001"
      />
      <LevelCard
        faculty="Computer Science"
        title="Database Systems"
        description="Comprehensive study of database design, normalization, SQL, and modern database management systems."
        module="4CS012"
      />
      <LevelCard
        faculty="Cyber Security"
        title="Security Fundamentals"
        description="Introduction to cybersecurity concepts, threat analysis, encryption, and security protocols."
        module="4MM001"
      />
      <LevelCard
        faculty="BIBM"
        title="Business Analytics"
        description="Data analysis techniques, business intelligence tools, and strategic decision-making framework"
        module="4CS001"
      />
      <LevelCard
        faculty="Computer Science"
        title="Artificial Intelligence"
        description="Machine learning algorithms, neural networks, and AI applications in modern computing."
        module="4CS012"
      />
      <LevelCard
        faculty="Computer Science"
        title="Mathematics"
        description="Advanced mathematical concepts including discrete mathematics, linear algebra, calculus."
        module="4MM001"
      />
    </div>
  );
};
