"use client";
import { RotatingLines } from "react-loader-spinner";
const loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};
export default loading;
