import { ReactNode } from "react";
import { RenderIf } from "@/components/hoc/RenderIf";

interface AuthFormInterface {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  onSubmit?: any;
  className?: string;
  maxWidth: string;
}

const AuthForm = ({
  title,
  subtitle,
  children,
  onSubmit,
  className,
  maxWidth,
}: AuthFormInterface) => {
  return (
    <main
      className={`${className}  ${maxWidth} mx-auto px-4 h-[80vh] pt-[21px] lg:pt-0 md:flex md:flex-col md:justify-center
    `}
    >
      <div className="mb-8 md:mb-16">
        <RenderIf condition={!!title}>
          <h2 className="text-2xl lg:text-5xl tracking-wide font-bold text-secondary_1">
            {title}
          </h2>
        </RenderIf>
        <RenderIf condition={!!subtitle}>
          <h2 className="text-sm lg:text-base font-normal">{subtitle}</h2>
        </RenderIf>
      </div>
      <form className="" onSubmit={onSubmit}>
        {children}
      </form>
    </main>
  );
};

export default AuthForm;
