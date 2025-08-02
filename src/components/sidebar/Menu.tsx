import { FC } from "react";
//import { HugeiconsIcon } from "@hugeicons/react";
// import { LeetcodeIcon } from "@hugeicons-pro/core-solid-standard";
import {
  Code,
  Flame,
  Github,
  Home,
  Image as ImageIcon,
  Instagram,
  Layers,
  Linkedin,
  Scissors,
  Share2,
  Shirt,
  ShoppingCart,
  Ticket,
  Video,
  X,
  Youtube,
} from "lucide-react";
import List from "../ui/List";
import { useMenu } from "../Provider";

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
  const { showMenuVisibility } = useMenu();
  return (
    <div
      className="flex relative flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full overflow-y-auto pb-20 md:pb-5"
      onClick={() => showMenuVisibility(false)}
    >
      <div className="block lg:hidden p-5 z-10 text-primary absolute right-0 top-0 cursor-pointer text-2xl">
        <X className={`text-primary`} />
      </div>
      {/* List 1 */}
      <List link="/" effect="slideUp">
        <Home /> Home
      </List>
      {/* <List link="/" effect="slideUp">
        <Flame /> Trending
      </List> */}
      <List
        target="_blank"
        link="https://leetcode.com/u/sagnikp62/"
        effect="slideUp"
      >
        {/* <HugeiconsIcon icon={} /> */}
        <Code /> LeetCode
      </List>
      <List
        target="_blank"
        link="https://www.youtube.com/channel/UCxbzIzyqretygYqW6oqNOxQ"
        effect="slideUp"
      >
        <Video /> Videos
      </List>

      {/* List 2 */}
      <div className="mt-5">Socials</div>
      <List
        target="_blank"
        link="https://www.instagram.com/smp_philophobia_7/"
        effect="slideUp"
      >
        <Instagram color="#b5179e" /> Instagram
      </List>
      <List
        target="_blank"
        link="https://github.com/SagnikPal-7?tab=repositories"
        effect="slideUp"
      >
        <Github color="#2a9d8f" /> Github
      </List>
      <List
        target="_blank"
        link="https://www.youtube.com/channel/UCxbzIzyqretygYqW6oqNOxQ"
        effect="slideUp"
      >
        <Youtube color="#e63946" /> Youtube
      </List>
      {/* <List target="_blank" link="#" effect="slideUp">
        <Layers color="#f77f00" /> LeetCode
      </List> */}
      <List
        target="_blank"
        link="https://www.linkedin.com/in/sagnik-pal-193a29250"
        effect="slideUp"
      >
        <Linkedin color="#0277b5" /> Linkedin
      </List>

      {/* List 3 */}
      {/* <div className="mt-5">Projects</div>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/ezClothing"
                effect="slideUp"
            >
                <Shirt /> Ez CLothing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/eCommerce"
                effect="slideUp"
            >
                <ShoppingCart /> eCommerce
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/HardhatLottery"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/filetransfer-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                target="_blank"
                link="https://github.com/nwaliaez/dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
            <List
                target="_blank"
                link="https://snake-nwaliaez.vercel.app/"
                effect="slideUp"
            >
                <Scissors /> Ex Clone
            </List> */}
    </div>
  );
};

export default Menu;
