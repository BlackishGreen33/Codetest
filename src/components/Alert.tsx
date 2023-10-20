import React from "react";
import { motion } from "framer-motion";

import { slideUpOut } from "../animations";

type AlertProps = {
  status: string;
  alertMsg: string;
};

const Alert: React.FC<AlertProps> = ({ status, alertMsg }) => {
  return (
    <motion.div {...slideUpOut} className="fixed top-24 right-12 z-10">
      {status === "Success" && (
        <div className="px-4 py-2 bg-emerald-400 shadow-md shadow-emerald-500">
          <p className="text-lg text-primary">{alertMsg}</p>
        </div>
      )}
      {status === "Warning" && (
        <div className="px-4 py-2 bg-yellow-400 shadow-md shadow-yellow-500">
          <p className="text-lg text-primary">{alertMsg}</p>
        </div>
      )}
      {status === "Danger" && (
        <div className="px-4 py-2 bg-red-400 shadow-md shadow-red-500">
          <p className="text-lg text-primary">{alertMsg}</p>
        </div>
      )}
    </motion.div>
  );
};
export default Alert;
