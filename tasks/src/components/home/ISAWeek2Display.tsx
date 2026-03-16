import { ISACard } from "../../layouts/ISACard";

export const ISAWeek2Display = () => {
  return (
    <div className="h-full">
      <h1 className="font-medium text-[29.75px] leading-none pt-1 ml-1">
        Week 2 - Advanced CSS & JavaScript
      </h1>
      <div className="flex flex-col gap-4">
        <ISACard
          title="CSS Grid and Flexbox"
          teacher="Bishal Khadka"
          post="Module Leader"
          description1="Master modern CSS layout techniques with Grid and Flexbox. Learn how to create responsive layouts and understand when to use each"
          description2="layout method"
          files={["CSSGridGuide.pdf", "flexbox_ex.docx"]}
        />
        <ISACard
          title="Lists and Tables in HTML - Beginners"
          teacher="Lujana Bajracharya"
          post="GTA"
          description1="A comprehensive guide to database design principles and
            normalization techniques. This resource covers the complete database
            design"
          description2="process from requirements analysis to implementation. Learn about
            entity-relationship modeling, functional dependencies, and all
            normal"
          description3="forms."
          files={["html_Lists.pdf", "tables_html.pdf"]}
        />
        <ISACard
          title="Lists and Tables in HTML - Beginners"
          teacher="Lujana Bajracharya"
          post="GTA"
          description1="A comprehensive guide to database design principles and
            normalization techniques. This resource covers the complete database
            design"
          description2="process from requirements analysis to implementation. Learn about
            entity-relationship modeling, functional dependencies, and all
            normal"
          description3="forms."
          files={["html_Lists.pdf", "tables_html.pdf"]}
        />
      </div>
      <h2 className="mt-14 text-black/20 text-[20px] flex justify-center items-center mb-10">
        You've reached the end of Week 1
      </h2>
    </div>
  );
};
