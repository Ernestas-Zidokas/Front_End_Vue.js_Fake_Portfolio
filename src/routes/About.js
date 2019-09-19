export default {
    path: '/about',
    component: () => import('@/views/About'),
    meta: {
        displayName: 'About',
        defaultName: 'About:Education'
    },
    children: [
        {
            path: '',
            name: 'About:Education',
            component: () => import('@/views/About/Education'),
            meta: {
                displayName: 'Education',
            },
        },
        {
            path: 'career',
            name: 'About:Career',
            component: () => import('@/views/About/Career'),
            meta: {
                displayName: 'Career',
            },
        },
        {
            path: 'info',
            name: 'About:Info',
            component: () => import('@/views/About/Info'),
            meta: {
                displayName: 'Info',
            },
        }
    ]
}