import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import bookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from '@/assets/icons/square-js.svg'
import HTMLIcon from '@/assets/icons/html5.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import { TechIcon } from "@/components/TechIcon";

const toolBoxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },  
  {
    title: 'Typescript',
    iconType: '',
  },  
  {
    title: 'Python',
    iconType: '',
  },  
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },  
  {
    title: 'CSS',
    iconType: CSSIcon,
  },  
  {
    title: 'Tailwindcss',
    iconType: '',
  },  
  {
    title: 'React',
    iconType: '',
  },  
]

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3 className="">My Reads</h3>
            <p className="">Explore the books shaping my perspectives.</p>
          </div>
          <Image src={bookImage} alt="Book Cover" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3 className="">My Toolbox</h3>
            <p className="">Explore the technologies and tools I use to craft exceptional digital experiences.</p>
          </div>
          <div>
            {toolBoxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span className="">{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
