import viewHome from './views/home';
import viewPlans from './views/plans';
import viewDevices from './views/devices';


export default [
    {
        path: '/offer/:funnelId/',
        name: 'home',
        component: viewHome
    },    
    {
        path: '/offer/:funnelId/plans',
        name: 'plans',
        component: viewPlans
    },
    {
        path: 'offer/:funnelId/devices',
        name: 'devices',
        component: viewDevices
    }
];

