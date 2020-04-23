import App from './App';
import Home from './pages/home/index';
import Dashboard from './pages/dashboard/index';

const routes: any[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/test',
        component: Dashboard,
    }
];

export default routes
