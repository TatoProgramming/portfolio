
import Home from './home/Home.vue';
import Blog from './developerBlog/Blog.vue';
import Projects from './projects/Projects';
import Resume from './resume/Resume.vue';
import Contact from './contact/Contact.vue';

export const routes = [
  { path: '/', component: Home},
  // { path: '/blog', component: Blog},
  // { path: '/contact', component: Contact},
  { path: '/projects', component: Projects},
  { path: '/resume', component: Resume}
];
