import athlete from '../img/athlete-small.png';
import goodtimes from '../img/4.jpeg';
import theracer from '../img/2.jpeg';
import athlete2 from '../img/athlete2.png';
import goodtimes2 from '../img/home2.jpeg';
import theracer2 from '../img/1.jpeg';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Become Warrior With Our Intesive Training Programms.”',
        },
      ],
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Good Days',
          description:
            '“Ninja Training , Where we provide variety of trainings.”',
        },
      ],
    },
    {
      title: 'Unleash Yourself',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Mix Martial Arts',
          description:
            '“Learn from the Best.”',
        },

      ],
    },
  ];
};