import React from "react";
import GoalsList from "../../components/GoalsList";
import { GoalsCtx } from "../../store/GoalsCtxProvidr";
import { Link } from "react-router-dom";

import { useContext } from "react";
export default function Goals() {
  const ctx = useContext(GoalsCtx);
  return (
    <div className=" mx-auto px-24 mb-8 max-w-[1000px]">
      <h1 className="text-center  text-4xl font-semibold pt-16 pb-6">
        Let's meet your Financial Goals!
      </h1>
      <GoalsList goals={ctx.goals} />
      <div className="flex justify-end mt-6">
        <button>
          <Link
            className="bg-blue-500 rounded-lg px-6 py-1 hover:opacity-95 text-white"
            to={"new-goal"}
          >
            Add New Goal
          </Link>
        </button>
      </div>
    </div>
  );
}
