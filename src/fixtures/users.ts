
import { ImageSourcePropType } from "react-native";

import emma from "../assets/emma.jpeg";
import katie from "../assets/katie.jpeg";
import tom from "../assets/tom.jpeg";
import james from "../assets/james.jpeg";

export interface User {
  id: number;
  name: string;
  icon: ImageSourcePropType;
}

const users: User[] = [
  {
    id: 1,
    name: "Tom",
    icon: tom,
  },
  {
    id: 2,
    name: "Emma",
    icon: emma,
  },
  {
    id: 3,
    name: "Katie",
    icon: katie,
  }, {
    id: 4,
    name: "James",
    icon: james,
  },
];

export default users;
