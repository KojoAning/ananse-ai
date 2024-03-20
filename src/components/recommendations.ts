
import esther from './assets/images/esther.png'
import michael from './assets/images/michael.png'
import kweku from './assets/images/kweku.png'

export interface recommendationInterface {
  name: string;
  img: string; // Change type to string for the image path
  description: string;
}

export const recommendations: recommendationInterface[] = [
    {
        name: "Michael Adjabo",
        img: michael,
        description: "RoboLabs provides the best platform to for robotics education with an African touch"
    },
    {
        name: "Sister Akos",
        img: esther,
        description: "RoboLabs provides the best platform to for robotics education with an African touch"

    },
    {
        name: "Kweku Ananse",
        img: kweku,
        description: "RoboLabs provides the best platform to for robotics education with an African touch."
    }
];
