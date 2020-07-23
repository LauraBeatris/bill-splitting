import theme from "../styles/theme";

export const colors = [
  theme.colors.red,
  theme.colors.purple,
  theme.colors.blue,
  theme.colors.yellow,
];

/**
 * Returns a random color based on an id
 * @param {*} id
 */
const getColorById = (id: number): string => (
  colors[Math.floor(id % colors.length)]
);

export default getColorById;
