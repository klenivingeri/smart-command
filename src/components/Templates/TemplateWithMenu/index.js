import { SideBar } from "@/components/Atoms/Sidebar";
import { ContainerContent } from "@/components/Molecules/ContainerContent";

export const TemplateWithMenu = ({path}) => {
  return (
    <div className="flex flex-1 w-full h-full">
      <SideBar path={path}/>
      <ContainerContent />
    </div>
  );
};
