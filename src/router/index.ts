import {createWebHashHistory, createRouter} from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Login from '../components/Login.vue';
import NotebookList from '../components/NotebookList.vue';
import NoteDetail from '../components/NoteDetail.vue';
import TashDetail from '../components/TashDetail.vue';
import NotFound from '../components/NotFound.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/notebooks',
      component: NotebookList
    },
    {
      path: '/note/:noteId',
      component: NoteDetail
    },
    {
      path: '/trash/:noteId',
      component: TashDetail
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound
    }
  ]
});
export default router;
