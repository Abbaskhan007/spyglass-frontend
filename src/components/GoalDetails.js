import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoalsCtx } from "../store/GoalsCtxProvidr";
import UpdateGoalForm from "./UpdateGoalForm";
import { Modal } from "antd";
export default function GoalDetails() {
  const navigate = useNavigate();
 
  const { id: goalId } = useParams();
  const ctx = useContext(GoalsCtx);
  const data = ctx?.goals?.find((goal) => goal.id == goalId);
  // if(!data) navigate('/')
  const { id } = data;


  return (
    <div className="mx-auto flex items-center flex-col  container mt-6">
      <UpdateGoalForm formData={data} />
    
    </div>
  );
}
