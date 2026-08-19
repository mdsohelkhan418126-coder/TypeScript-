// blogpost status
enum BlogStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

type BlogPost = {
  title: string;
  content: string;
  status: BlogStatus;
};
const myPost: BlogPost = {
  title: 'My First Blog Post',
  content: 'This is the content of my first blog post.',
  status: BlogStatus.DRAFT,
};
console.log(myPost.status); // Output: 'draft'
const myPost2: BlogPost = {
  title: 'My Second Blog Post',
  content: 'This is the content of my second blog post.',
  status: BlogStatus.PUBLISHED,
};
console.log(myPost2.status); // Output: 'published'