import { Container } from "@/components/Atoms/Container";
import { Content } from "@/components/Atoms/Content";

export const ContainerContent = ({children, title, Icon}) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
