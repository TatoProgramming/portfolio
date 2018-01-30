
import Home from './home/Home.vue';
import Blog from './developerBlog/Blog.vue';
import Projects from './projects/Projects';
import Resume from './resume/Resume.vue';
import Contact from './contact/Contact.vue';
import AppData from './shared/appData';

export const routes = [
  { path: AppData.baseUrl, component: Home},
  // { path: base + 'blog', component: Blog},
  // { path: base + 'contact', component: Contact},
  { path: AppData.baseUrl + 'projects', component: Projects},
  { path: AppData.baseUrl + 'resume', component: Resume}
];
