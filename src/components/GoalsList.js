import React from "react";
import GoalItem from "./GoalItem";
export default function GoalsList({ goals }) {
  return (
    <ul className="flex flex-col gap-6">
      {goals?.map((goal) => (
        <GoalItem key={goal.id} {...goal} />
      ))}
    </ul>
  );
}
