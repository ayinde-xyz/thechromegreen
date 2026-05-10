import Header from "@/components/blocks/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" font-sans ">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
