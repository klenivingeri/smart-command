import { SideBar } from "@/components/Organisms/Sidebar";
import { ContainerContent } from "@/components/Molecules/ContainerContent";

export const TemplateWithMenu = ({path, children}) => {
  return (
    <div className="flex flex-1 w-full h-full">
      <SideBar path={path}/>
      <ContainerContent>{children}</ContainerContent>
    </div>
  );
};
