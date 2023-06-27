import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TimeAgo from "../../components/TimeAgo";
import { GoalsCtx } from "../../store/GoalsCtxProvidr";
import Progress from "../../components/GeneralUI/Progess/Progress";
export default function GoalDetailsPage() {
  const { id: goalId } = useParams();
  const ctx = useContext(GoalsCtx);
  const data = ctx?.goals?.find(goal => goal.id == goalId);
  console.log("------", data);
  return (
    <div className="max-w-[1200px] mx-auto p-4 my-10  border border-gray-200 rounded-lg">
      <img
        src={data?.image?.thumbUrl}
        className="w-[200px] h-[200px] object-contain mx-auto mb-8 mt-2"
      />
      <h1 className="text-2xl font-semibold mb-2">{data?.title}</h1>
      <p>{data?.description}</p>
      <div className="flex space-x-10 items-center justify-center my-4">
        <p className="bg-cyan-600 text-white px-10 rounded-md py-2">
          {`Current: ${data?.curentAmount}`}
        </p>
        <p className="bg-cyan-600 text-white px-10 rounded-md py-2">
          {`Target: ${data?.targetAmount}`}
        </p>
      </div>
      <Progress current={data?.curentAmount} target={data?.targetAmount} />
      <p>
        <TimeAgo timestamp={data?.date} />
      </p>
    </div>
  );
}
