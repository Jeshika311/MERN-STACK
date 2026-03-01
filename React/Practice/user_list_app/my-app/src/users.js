// users.js
export const users = Array.from({ length: 2000 }, (_, i) => ({
  id: i,
  name: `User ${i + 1}`
}));
