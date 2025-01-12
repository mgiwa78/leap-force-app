import { Icon } from "@iconify/react";
const NotFound = () => {
  return (
    <main>
      <div className="flex min-h-[600px] flex-col justify-center items-center bg-secondary_1 text-white gap-4">
        <Icon icon="tabler:plane-departure" width="100" height="100" />
        <div className="flex items-center gap-x-2">
          <h1 className="capitalize text-2xl lg:text-5xl lg:leading-[66px] font-bold">
            404
          </h1>
          <p>The resource you seek does not exist</p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
