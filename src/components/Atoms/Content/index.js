import { TitleWithIcon } from "@/components/Molecules/TitleWithIcon";

export const Content = ({ children, title, Icon }) => {
  return (
    <main className="w-full h-full min-w-[400px] max-w-[1200px]">
      <div>
        <TitleWithIcon size="text-2xl" Icon={Icon} title={title} />
      </div>
      <span className="flex border-[1px] border-b-gray-200" />
      {children}
    </main>
  );
};
