interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Goal {
  task: string;
  value: number;
  time: string;
  interval: string;
}

interface LocationData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface User {
  id: number;
  email: string;
  username: string;
}

interface Profile {
  firstname: string;
  lastname: string;
  goals: Array<Goal>;
  quests: Array<Quest>;
  experience: number;
  level: number;
  //skillProgress: Map<string, boolean>; // false = accepted / true = completed
}

interface Quest {
  title: string;
  description: string;
  coordinate: Coordinate;
  reward: number;
  expirationTimestamp?: Date;
}

interface QuestList {
  quests: Quest[];
}

interface Skill {
  id: string;
  name: string;
  description: string;
  children: Skill[];
  parent?: string;
  prereq?: Array<string>;
}

export {
  Coordinate,
  Goal,
  LocationData,
  Profile,
  Quest,
  QuestList,
  Skill,
  User,
};
