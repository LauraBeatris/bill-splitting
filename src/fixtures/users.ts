import { ImageSourcePropType } from "react-native";

import emma from "../assets/emma.jpeg";
import katie from "../assets/katie.jpeg";
import tom from "../assets/tom.jpeg";
import james from "../assets/james.jpeg";

export interface User {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  bill: number;
}

const Users: User[] = [
  {
    id: 1,
    name: "Tom",
    icon: tom,
    bill: 9,
  },
  {
    id: 2,
    name: "Emma",
    icon: emma,
    bill: 10,
  },
  {
    id: 3,
    name: "Katie",
    icon: katie,
    bill: 25,
  }, {
    id: 4,
    name: "James",
    icon: james,
    bill: 12,
  },
];

export default Users;
