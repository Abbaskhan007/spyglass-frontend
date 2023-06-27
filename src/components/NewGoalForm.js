import React from "react";
import { Form, Input, InputNumber } from "antd";
import FormSubmitButton from "../components/GeneralUI/FormSubmitButton/FormSubmitButton";
import UploadImage from "./UploadImage";
import { getGoalRequrieRules, getMinRule } from "../util-fn/form-util.js";
import { useState } from "react";
import { useContext } from "react";
import { GoalsCtx } from "../store/GoalsCtxProvidr";
import { useNavigate } from "react-router-dom";
export default function NewGoalForm() {
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const goalsCtx = useContext(GoalsCtx);
  const addGoalHandler = data => {
    if (!fileList.length) return;
    goalsCtx.addGoal({ ...data, image: fileList[0] });
    navigate("/");
  };
  // const addImageHandler = (data) => {
  //   setFileList((state) => [...state, { ...data }]);
  // };
  return (
    <div className="position-relative border mt-16 border-gray-300 px-4 py-6 rounded-lg min-w-[450px] max-w-[450px]">
      <Form layout="vertical" onFinish={addGoalHandler}>
        <Form.Item
          label="Title"
          name={"title"}
          rules={[
            getGoalRequrieRules("Please enter goal's title"),
            getMinRule(3, "Please enter at lease 3 characters"),
          ]}
        >
          <Input
            className="rounded-none hover:border-r-0 focus:border-r-0 border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your goal title"
          />
        </Form.Item>

        <Form.Item
          label="Description"
          name={"description"}
          rules={[
            getGoalRequrieRules("Please enter goal's description"),
            getMinRule(60, "Please enter at lease 60 characters"),
          ]}
        >
          <Input.TextArea
            className="rounded-none hover:border-r-0 focus:border-r-0 border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your goal description"
          />
        </Form.Item>

        <Form.Item
          label="Target amount"
          name={"targetAmount"}
          rules={[getGoalRequrieRules("Please enter target amount")]}
        >
          <InputNumber
            min={1}
            className="rounded-none hover:border-r-0 focus:border-r-0 w-full border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter your Target Amount"
          />
        </Form.Item>

        <Form.Item
          label="Curent amount"
          name={"curentAmount"}
          rules={[getGoalRequrieRules("Please Enter curent amount you have")]}
        >
          <InputNumber
            min={0}
            className="rounded-none hover:border-r-0 focus:border-r-0 w-full border-0 border-b-[1px] border-b-gray-400"
            placeholder="Enter curent amount"
          />
        </Form.Item>
        <UploadImage onAddImage={setFileList} images={fileList} />
        {!fileList.length && isClick && (
          <p className="text-red-500">Please upload an image</p>
        )}
        <FormSubmitButton onClick={() => setIsClick(true)}>
          ADD GOAL
        </FormSubmitButton>
      </Form>
    </div>
  );
}
