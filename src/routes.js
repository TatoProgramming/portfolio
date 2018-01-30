
import Home from './home/Home.vue';
import Blog from './developerBlog/Blog.vue';
import Projects from './projects/Projects';
import Resume from './resume/Resume.vue';
import Contact from './contact/Contact.vue';
const base = window.location.pathname;

export const routes = [
  { path: base, component: Home},
  // { path: base + 'blog', component: Blog},
  // { path: base + 'contact', component: Contact},
  { path: base + 'projects', component: Projects},
  { path: base + 'resume', component: Resume}
];
