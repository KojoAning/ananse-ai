import beginImage from '../assets/images/begin.png';
import interImage from '../assets/images/inter.png'
import profImage from '../assets/images/prof.png'

export interface divContents {
  title: string;
  link1: string; // Change type to string for the image path
  link2: string;
}

export const divcontents: divContents[] = [
  {
    title: "Robolabs",
    link1: "About Us", // Use the imported image path
    link2: "Careers",
  },
  {
    title: "Robolabs",
    link1: "Programming Fundementals", // Use the imported image path
    link2: "Robotics Fundementals",
  },
  {
    title: "Community",
    link1: "Learners", // Use the imported image path
    link2: "Educators",
  },
];
