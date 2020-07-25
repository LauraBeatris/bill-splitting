import users, { User } from "./users";

export interface Bill {
  id: number;
  user: User;
  value: number;
}

const bills: Bill[] = [
  {
    id: 1,
    user: users[0],
    value: 20,
  },
  {
    id: 2,
    user: users[1],
    value: 12,
  },
  {
    id: 3,
    user: users[2],
    value: 35,
  }, {
    id: 4,
    user: users[3],
    value: 12,
  },
];

export default bills;
