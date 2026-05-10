import { quicksand } from "@/app/fonts";
import { Card } from "../ui/card";
import SlotCounter from "react-slot-counter";
import { Earth, PersonStanding, User } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="min-h-screen py-10 px-5  flex flex-col justify-around">
      <div className="space-y-4 mb-5">
        <h1 className={`${quicksand.className} text-5xl text-background-green`}>
          What is The Chrome Green Club?
        </h1>
        <p className="text-slate-600 md:text-2xl text-lg ">
          The ChromeGreen Club is a dynamic, youth-led organization that bridges
          the gap between environmental awareness and community-driven change.
          We aren't just fighting the symptoms of pollution; we are addressing
          the root causes through targeted education, hands-on mini-projects,
          and strategic research.
        </p>
      </div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-transparent pl-4 border-background-green flex justify-around flex-row items-center">
          <div>
            {" "}
            <p
              className={`${quicksand.className} text-4xl text-background-green`}>
              <SlotCounter value={1500} />+
            </p>
            <p className="text-slate-500">Students Educated</p>
          </div>
          <div>
            <PersonStanding className="size-10" />
          </div>
        </Card>
        <Card className="bg-transparent pl-4 border-background-green flex justify-around  items-center flex-row">
          <div>
            <p
              className={`${quicksand.className} text-4xl text-background-green`}>
              <SlotCounter value={10} />+
            </p>
            <p className="text-slate-500">
              Cleanup Drives <p>Completed</p>
            </p>
          </div>
          <div>
            <Earth className="size-10" />
          </div>
        </Card>
        <Card className="bg-transparent pl-4 border-background-green flex justify-around items-center flex-row">
          <div>
            <p
              className={`${quicksand.className} text-4xl text-background-green`}>
              <SlotCounter value={1000} />+
            </p>
            <p className="text-slate-500">Active Volunteer</p>
          </div>
          <div>
            <User className="size-10" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
