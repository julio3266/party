import MainLayout from "./components/MainLayout";
import Seo from "./components/Seo";

const dashboard = () => {
  return (
    <MainLayout>
      <Seo
        title={"My party - gerenciamento de eventos"}
        description="Gerenciamento de eventos com My Party"
      />
    </MainLayout>
  );
};

export default dashboard;
