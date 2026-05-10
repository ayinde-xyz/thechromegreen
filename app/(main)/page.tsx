import AboutUs from "@/components/blocks/about-us";
import Hero from "@/components/blocks/hero";
import OurImpact from "@/components/blocks/impact";
import Team from "@/components/blocks/team";

const MainPage = () => {
  return (
    <main className="w-full min-h-screen flex flex-col ">
      {/* {Hero content of page} */}
      <Hero />
      {/* {About Us} */}
      <AboutUs />
      {/* {Our Impact} */}
      <OurImpact />
      {/* {Meet Our Team} */}
      <Team />
    </main>
  );
};

export default MainPage;
