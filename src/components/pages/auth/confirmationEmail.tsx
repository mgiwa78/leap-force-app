import { ReactNode } from "react";
import smsNotification from "@/assets/sms-notification.svg";

interface Props {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

const ConfirmationEmail = ({ title, subtitle, children }: Props) => {
  return (
    <div className="w-full flex items-center flex-col justify-center gap-y-6">
      <img src={smsNotification} alt="notification" />
      <div className="text-secondary">
        <h1 className=" font-semibold text-[20px] md:text-[32px]">{title}</h1>
        <h1 className="text-xs font-light md:text-[15px]">{subtitle}</h1>
      </div>
      {children}
    </div>
  );
};

export default ConfirmationEmail;
