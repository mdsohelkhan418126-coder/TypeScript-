// user profile
interface UserProfile {
  id: number;
  username: string;
  email: string;
  age: number;
}
// stems 2:author interface Author

interface Author extends UserProfile {
  bio: string;
  posts: string[];
}
// defining a user profile object
type Status = 'active' | 'inactive' | 'banned';
// defining a user profile object
const author1: Author = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
  bio: 'A passionate writer',
   posts: ['Post 1', 'Post 2']
};
// status variable
const status: Status = 'active';

console.log(author1);