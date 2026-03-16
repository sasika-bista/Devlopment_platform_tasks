import { ExtraLearningsCard } from "../../layouts/HomePageCard";
import BookImg from "../../assets/extraLearningPage/book.svg";

interface Props {
  program: string;
  contributor: string;
  search: string;
  setProgram: (value: string) => void;
  setContributor: (value: string) => void;
}

export const ElCardDisplay = ({
  program,
  contributor,
  search,
  setProgram,
  setContributor,
}: Props) => {
  const cardInfo = [
    {
      faculty: "Web Development",
      title: "React.js",
      description:
        "Build dynamic user interfaces using resuable components, state management, and modern frontend architecture with React.",
      contributor: "Student",
    },
    {
      faculty: "Web Development",
      title: "Django",
      description:
        "Create secure and robust web applications quickly using Django’s built-in tools, ORM, and admin interface.",
      contributor: "Module Leader",
    },
    {
      faculty: "Web Development",
      title: "Express.js",
      description:
        "Develop scalable backend APIs and server-side logic using minimal and flexible Node.js-powered Express framweork.",
      contributor: "Student",
    },
    {
      faculty: "AI and ML",
      title: "R Programming",
      description:
        "A statistical programming language tailored for data analysis, visualization, and academic research, especially powerful in statistics-hea...",
      contributor: "Module Leader",
    },
    {
      faculty: "AI and ML",
      title: "R Programming",
      description:
        "A statistical programming language tailored for data analysis, visualization, and academic research, especially powerful in statistics-hea...",
      contributor: "Module Leader",
    },
    {
      faculty: "Big Data",
      title: "Apache Spark",
      description:
        "A fast, unified analytics engine for large-scale data processing with built-in modules for streaming, SQL, machine learning, and graph...",
      contributor: "Student",
    },
  ];
  const filteredCards = cardInfo.filter((card) => {
    const programMatch = program === "All Programs" || card.faculty === program;

    const contributorMatch =
      contributor === "All Contributors" || card.contributor === contributor;

    const searchMatch =
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase()) ||
      card.faculty.toLowerCase().includes(search.toLowerCase());

    return programMatch && contributorMatch && searchMatch;
  });
  return filteredCards.length > 0 ? (
    <div className="grid grid-cols-3 gap-8 mt-20 px-24.25 ">
      {filteredCards.map((card, index) => (
        <ExtraLearningsCard
          faculty={card.faculty}
          title={card.title}
          description={card.description}
          contributor={card.contributor}
          key={index}
        />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center w-screen mt-18.25">
      <img src={BookImg} alt="book" className="h-17 w-17" />
      <h2 className="text-black/60 font-semibold text-[22.5px] mt-4.5">
        No resources found
      </h2>
      <p className="text-black/60 mt-6.5 text-[19px]">
        Try adjusting your filters to find relevant content.
      </p>
      <button
        className="px-7 py-2.5 bg-primary/80 text-white text-[21.5px] font-semibold rounded-md mt-9.5 mb-16.25 cursor-pointer hover:bg-primary/50"
        onClick={() => {
          setContributor("All Contributors");
          setProgram("All Programs");
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
};
