interface LocationData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Quest {
  title: string;
  description: string;
  location: LocationData;
  reward: number;
  expirationTimestamp: Date;
}

interface Profile {
  firstname: string;
  lastname: string;
  quests: Array<Quest>;
  experience: number;
  level: number;
}

export { LocationData, Profile };
