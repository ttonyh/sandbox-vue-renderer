import viewIndex from './views/index';
import viewHome from './views/home';
import viewPlans from './views/plans';
import viewDevices from './views/devices';


export default [
    {
        path: '/offer/:funnelId',
        name: 'home',
        redirect: { name: 'offer' },
        component: viewIndex,
        children: [
            {
                path: '/offer/:funnelId',
                name: 'offer',
                component: viewHome
            },
            {
                path: '/offer/:funnelId/plans',
                name: 'plans',
                component: viewPlans
            },
            {
                path: '/offer/:funnelId/devices',
                name: 'devices',
                component: viewDevices
            }
        ]
    }
];

