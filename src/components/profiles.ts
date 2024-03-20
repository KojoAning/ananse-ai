import beginImage from './assets/images/begin.png';
import interImage from './assets/images/inter.png'
import profImage from './assets/images/prof.png'

export interface profileInterface {
  name: string;
  img: string; // Change type to string for the image path
  description: string;
}

export const profiles: profileInterface[] = [
  {
    name: "Beginners",
    img: beginImage, // Use the imported image path
    description: "Get Started with programming our robots online with little or no experience",
  },
  {
    name: "Intermediates",
    img: interImage, // Use the imported image path
    description: "With the little knowledge you have, we can help you polish your skills to make you industry ready",
  },
  {
    name: "Professionals",
    img: profImage, // Use the imported image path
    description: "Expand your knowledge by using our platform to make and simulate your prototypes",
  },
];
