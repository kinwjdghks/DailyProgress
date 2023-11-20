import { useState } from "react";
import LoginBox from "./login";
import RegisterBox from "./register";

const LoginTab = ({
  isloggingin,
  onReg,
}: {
  isloggingin: Boolean;
  onReg: () => void;
}) => {
  const [isRegistering, setIsRegistering] = useState<Boolean>(false);

  return (
    <div className="w-min h-screen fixed left-0 bg-white overflow-hidden">
      <LoginBox
        isLog={isloggingin}
        onReg={() => {
          setIsRegistering(true);
          onReg();
        }}
      />
      <RegisterBox isReg={isRegistering} />
    </div>
  );
};

export default LoginTab;
