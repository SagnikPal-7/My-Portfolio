import { FC } from "react";
import TechCard from "./Card/TechCard";

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <TechCard
          title="Frontend"
          classaName="bg-[#4f91f2]"
          tech={[
            "HTML",
            "CSS",
            "Tailwind",
            "Javascript",
            "Bootstrap",
            "React Js",
          ]}
        />
        <TechCard
          title="Backend"
          classaName="bg-[#f37c36]"
          tech={["Node Js", "Socket Io" /*'BUN Js', 'Elysia', 'Next Auth'*/]}
        />
        <TechCard
          title="Database"
          classaName="bg-[#e0558a]"
          tech={[
            "MySql",
            "MongoDB",
            /*"SQL"'PostgreSQL', 'Redis', 'Elastic Search'*/
          ]}
        />
        <TechCard
          title="Version Control Systems"
          classaName="bg-[#e0558a]"
          tech={["GIT", "Github" /*'PostgreSQL', 'Redis', 'Elastic Search'*/]}
        />
        <TechCard
          title="DevOps"
          classaName="bg-[#e0558a]"
          tech={[
            "Docker",
            "Kubernetes" /*'PostgreSQL', 'Redis', 'Elastic Search'*/,
          ]}
        />
        <TechCard
          title="Cloud Computing (Learning)"
          classaName="bg-[#e0558a]"
          tech={["AWS"]}
        />
        <TechCard
          title="Python Libraries"
          classaName="bg-[#e0558a]"
          tech={["Numpy", "Pandas"]}
        />

        <TechCard
          title="Languages"
          classaName="bg-[#e0558a]"
          tech={[
            "Java",
            "C++",
            "Python",
            "C" /*'PostgreSQL', 'Redis', 'Elastic Search'*/,
          ]}
        />
      </div>
    </div>
  );
};

export default TechStack;
