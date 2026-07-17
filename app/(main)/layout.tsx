import Header from "@/components/blocks/header";
import Footer from "@/components/blocks/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-sans ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
