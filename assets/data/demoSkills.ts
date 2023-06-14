import { Skill } from "../../constants/interfaces";

const ollie: Skill = {
  id: "ollie",
  name: "Ollie",
  description:
    "The ollie is the essential trick that opens the door to all flip tricks. Pop your tail and jump while sliding your front foot towards the nose",
  children: [],
  parent: "manuals",
  prereq: ["manuals"],
};

const boneless: Skill = {
  id: "boneless",
  name: "Boneless",
  description:
    "The boneless is a versatile move that can help you get on or off of different obstacles. Step off your board and plant your front foot. At the same time, grab the front side of the board with your back hand and jump.",
  children: [],
  parent: "manuals",
  prereq: ["manuals"],
};

const manuals: Skill = {
  id: "manuals",
  name: "Manuals",
  description:
    "Though simple, manuals are the backbone to any trick in skateboarding. Developing your balance on a single truck will allow you to progress quickly. Make sure to keep your arms up to maintain balance",
  children: [ollie],
  parent: "riding",
};

const obstacles: Skill = {
  id: "obstacles",
  name: "Obstacles",
  description:
    "If you want to ride on something other than a flat surface its important to overcome some different obstacles. Try riding off of a sidewalk, or down an embankment. If you know how to",
  children: [],
  parent: "skateboarding",
  prereq: ["riding"],
};

const riding: Skill = {
  id: "riding",
  name: "Riding",
  description:
    "Discover whether you are regular or goofy, and get used to pushing around. Get comfortable riding on different terrain. Try lifting the front of your board to ride over cracks",
  children: [manuals, obstacles],
  parent: "skateboarding",
};

const skateboarding: Skill = {
  id: "skateboarding",
  name: "Skateboarding",
  description:
    "Learn the athletic artform of skateboarding. You will begin to see the world as a playground of expression. Begin your journey!",
  children: [riding],
};

export { skateboarding };
