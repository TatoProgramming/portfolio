
import Home from './home/Home.vue';
import Portfolio from './portfolio/Portfolio.vue';
import Blog from './developerBlog/Blog.vue'

export const routes = [
  { path: '/', component: Home},
  { path: '/portfolio', component: Portfolio},
  { path: '/blog', component: Blog}
];
