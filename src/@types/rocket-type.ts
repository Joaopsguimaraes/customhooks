export interface RocketsType {
  name: string;
  type: string;
  version: string;
  propellant_1: string;
  propellant_2: string;
  flickr_images: string[];
  first_flight: string;
  country: string;
  company: string;
  description: string;
  id: string;
  cost_per_launch: number;
  stages: number;
  height: {
    meters: number;
    feet: number;
  };
}
