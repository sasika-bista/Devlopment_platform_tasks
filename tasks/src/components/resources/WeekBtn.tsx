import { NavLink } from "react-router-dom";

export const WeekBtn = () => {
  const buttons = Array.from({ length: 11 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col gap-2.5">
      {buttons.map((i) => (
        <NavLink
          to={i == 1 ? "" : `week${i}`}
          className={({ isActive }) =>
            `px-2.75 py-2 w-42 rounded-sm flex justify-start font-semibold${
              isActive
                ? " border border-primary/60 text-primary bg-gray-100"
                : " text-black/60"
            }`
          }
        >
          Week {i}
        </NavLink>
      ))}
    </div>
  );
};
