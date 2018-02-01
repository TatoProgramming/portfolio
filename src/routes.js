
import Home from './home/Home.vue';
import Projects from './projects/Projects';
import Resume from './resume/Resume.vue';

export const routes = [
  { path: '/', component: Home},
  { path: '/projects', component: Projects},
  { path: '/resume', component: Resume}
];
