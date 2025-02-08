import { SideBar } from "@/components/Organisms/Sidebar";
import { ContainerContent } from "@/components/Molecules/ContainerContent";
import { IconUsers } from "@/icons/User";

export const TemplateWithMenu = ({ path, children }) => {
  return (
    <div className="flex flex-1 w-full h-full">
      <SideBar path={path} />
      <div className="w-[100%] h-[100%]">
        <div className="flex justify-end items-center p-4 mr-10">
          <IconUsers size="w-6 h-6" />
        </div>
        <ContainerContent>{children}</ContainerContent>
      </div>
    </div>
  );
};
