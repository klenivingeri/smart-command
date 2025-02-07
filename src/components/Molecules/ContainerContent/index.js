import { Container } from "@/components/Atoms/Container";
import { Content } from "@/components/Atoms/Content";

export const ContainerContent = ({children}) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};
