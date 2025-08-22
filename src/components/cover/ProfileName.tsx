import Link from "next/link";
import { FC } from "react";
import Button from "../ui/Button";
import { Instagram } from "lucide-react";

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
  return (
    <div className="text-3xl flex flex-col font-bold text-highlight">
      Sagnik Pal
      <div className="mt-2 text-sm font-medium flex justify-between items-center">
        @sagnik_pal
        {/* Full-stack MERN developer passionate about building scalable web
        applications, with strong problem-solving skills demonstrated by solving
        350+ DSA questions on LeetCode, with solid expertise in Java, C++, and
        Python. Currently exploring Machine Learning and Cloud Computing. */}
        <Link
          className="block md:hidden"
          href="https://www.instagram.com/smp_philophobia_7/"
          target="_blank"
        >
          <Button variant="primary" sizes={"iconOnly"}>
            <Instagram />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileName;
