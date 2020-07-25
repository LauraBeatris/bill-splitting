import { ImageSourcePropType } from "react-native";

import emma from "../assets/emma.jpeg";
import katie from "../assets/katie.jpeg";
import tom from "../assets/tom.jpeg";
import james from "../assets/james.jpeg";

export interface Bill {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  value: number;
}

const Users: Bill[] = [
  {
    id: 1,
    name: "Tom",
    icon: tom,
    value: 20,
  },
  {
    id: 2,
    name: "Emma",
    icon: emma,
    value: 12,
  },
  {
    id: 3,
    name: "Katie",
    icon: katie,
    value: 35,
  }, {
    id: 4,
    name: "James",
    icon: james,
    value: 12,
  },
];

export default Users;
