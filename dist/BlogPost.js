"use strict";
// type alilas
Object.defineProperty(exports, "__esModule", { value: true });
// create a blog BlogPost
const myPost = {
    title: 'My First Blog Post',
    content: 'This is the content of my first blog post.',
    author: 'John Doe',
    published: true,
    // publishedDate: '2026-08-16',
};
// create a function to display the blog post
function displayBlogPost(post) {
    console.log(`Title: ${post.title}`);
    console.log(`Content: ${post.content}`);
    console.log(`Author: ${post.author}`);
    console.log(`Published: ${post.published}`);
    if (post.published && post.publishedDate) {
        console.log(`Published Date: ${post.publishedDate}`);
    }
}
// call the function to display the blog post
displayBlogPost(myPost);
//# sourceMappingURL=BlogPost.js.map