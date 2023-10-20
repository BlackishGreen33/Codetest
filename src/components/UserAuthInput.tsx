import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

type UserAuthInputProps = {
  lable: string;
  placeHolder: string;
  isPass: boolean;
  setStateFuction: React.Dispatch<React.SetStateAction<string>>;
  Icon: string;
  setGetEmailValidationStatus?: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserAuthInput: React.FC<UserAuthInputProps> = ({
  lable,
  placeHolder,
  isPass,
  setStateFuction,
  Icon,
  setGetEmailValidationStatus,
}) => {
  const [value, setValue] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setStateFuction(e.target.value);

    if (placeHolder === "请输入电子邮件") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const status = emailRegex.test(value);
      setIsEmailValid(status);
      setGetEmailValidationStatus?.(status);
    }
  };

  return (
    <div className="flex flex-col items-start justify-start gap-1">
      <label className="text-sm text-gray-300">{lable}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 ${
          !isEmailValid &&
          placeHolder === "请输入电子邮件" &&
          value.length > 0 &&
          "border-2 border-red-500"
        }`}
      >
        <div className="text-text555 text-2xl">
          <Icon />
        </div>
        <input
          type={isPass && showPass ? "password" : "text"}
          placeholder={placeHolder}
          className="flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={handleTextChange}
        />
        {isPass && (
          <motion.div
            onClick={() => setShowPass(!showPass)}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            {showPass ? (
              <FaEyeSlash className="text-text555 text-2xl" />
            ) : (
              <FaEye className="text-text555 text-2xl" />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default UserAuthInput;
