import { fun2, fun3, fun4 } from './update-page'; 
// import createFilters from '../cj-modules';
// import userOffice from '../';

export const routers = [
    // {
    //     path:'/',
    //     component: createFilters,
    //     meta: { auth: false}
    // },
    // {
    //     path:'/user',
    //     component: userOffice,
    //     meta: { auth: false}
    // },
   
    {
        path:'/search',
        component: fun2,
        meta: { auth: false}
    },
    {
        path:'/category',
        component: fun3,
        meta: { auth: false}
    },
    {
        path:'/goods',
        component: fun4,
        meta: { auth: false}
    },    
];