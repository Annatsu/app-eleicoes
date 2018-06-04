// Route Components
import Login from './Login';


const routes = [
    {
        id: 'login',
        title: 'Login',
        url: '/',
        component: Login,
    },
    {
        id: 'signup',
        title: 'Cadastro',
        url: '/signup',
        component: null,
    }
];


export default routes;
