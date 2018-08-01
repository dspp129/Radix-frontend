import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};


export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const demo = {
    path: '/demo',
    name: 'demo',
    meta: {
        title: '大屏展现'
    },
    component: () => import('@/views/big-screen/demo.vue')
};



export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { preTitles:['集群管理', '执行器组'], path: 'cluster/agent-group/:id', title: '组详情', name: 'agent-group-detail', component: () => import('@/views/cluster/agent-group-detail') },  // 用于调整执行器组内的执行器
        { preTitles:['知识库', '数据集成'], path: 'metadata/server/:id', title: '探索ING', name: 'server-explorer', component: () => import('@/views/metadata/server-explorer') },  // 用于展示服务器探索
        { preTitles:['知识库', '表管理'], path: 'metadata/table/:id', title: '表详情', name: 'table-detail', component: () => import('@/views/metadata/table-detail') },  // 用于展示表字段等详细信息
        { preTitles:['数据开发','任务列表'], path: 'development/etl/:id', title: 'ETL任务', name: 'task-ETL', component: () => import('@/views/development/task-etl') },  // ETL任务
        { preTitles:['数据开发','任务列表'], path: 'development/sql/:id', title: 'SQL任务', name: 'task-SQL', component: () => import('@/views/development/task-sql') },  // SQL任务
        { preTitles:['数据开发','任务列表'], path: 'development/shell/:id', title: 'Shell任务', name: 'task-Shell', component: () => import('@/views/development/task-shell') },  // Shell任务
        { preTitles:['数据开发','阈值报警'], path: 'development/threshold/:id', title: '阈值报警详情', name: 'task-threshold', component: () => import('@/views/development/task-threshold') },  // 阈值报警任务
        { preTitles:['监控中心','调度监控'], path: 'monitor/record/:id', title: '调度详情', name: 'record', component: () => import('@/views/monitor/record') },  // Shell任务
        { preTitles:['监控中心','自动日报'], path: 'monitor/report/auto/:name', title: '日报详情', name: 'report-auto', component: () => import('@/views/monitor/report-auto') },  // 自动日报
        { path: 'message_index', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
/*
    {
        path: '/access',
        icon: 'key',
        name: 'access',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue') }
        ]
    },
    {
        path: '/access-test',
        icon: 'lock-combination',
        title: '权限测试页',
        name: 'accesstest',
        access: 0,
        component: Main,
        children: [
            { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
        ]
    },
    {
        path: '/international',
        icon: 'earth',
        title: {i18n: 'international'},
        name: 'international',
        component: Main,
        children: [
            { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
        ]
    },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor2',
                icon: 'compose',
                name: 'text-editor2',
                title: '统战人员信息',
                component: () => import('@/views/my-components/text-editor/text-editor2.vue')
            },
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'scroll-bar',
                icon: 'android-upload',
                name: 'scroll-bar',
                title: '滚动条',
                component: () => import('@/views/my-components/scroll-bar/scroll-bar-page.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                // component: () => import('@/views/my-components/count-to/count-to.vue')
                component: () => import('@/views/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    {
        path: '/form',
        icon: 'android-checkbox',
        name: 'form',
        title: '表单编辑',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
    {
        path: '/advanced-router',
        icon: 'ios-infinite',
        name: 'advanced-router',
        title: '高级路由',
        component: Main,
        children: [
            { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/tables',
        icon: 'ios-grid-view',
        name: 'tables',
        title: '表格',
        component: Main,
        children: [
            { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
            { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
            { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
        ]
    },
    {
        path: '/admin',
        icon: 'ios-people',
        name: 'admin',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'user', title: '用户管理', name: 'user-list', icon: 'person', component: () => import('@/views/admin/user-list.vue') },
            { path: 'group', title: '角色管理', name: 'user-group-list', icon: 'person-add', component: () => import('@/views/admin/user-group-list.vue') },
        ]
    },
*/
    {
        path: '/cluster',
        icon: 'speedometer',
        name: 'cluster',
        title: '集群管理',
        component: Main,
        children: [
            { path: 'agent', title: '执行器', name: 'agent-list', icon: 'android-desktop', component: () => import('@/views/cluster/agent-list.vue') },
            { path: 'group', title: '执行器组', name: 'agent-group-list', icon: 'social-buffer', component: () => import('@/views/cluster/agent-group-list.vue') },
    //        { path: 'spark', title: 'Spark集群', name: 'spark-ui', icon: 'social-buffer', component: () => import('@/views/cluster/spark-ui.vue') },
        ]
    },
    {
        path: '/metadata',
        icon: 'lightbulb',
        name: 'metadata',
        title: '知识库',
        component: Main,
        children: [
            { path: 'server', title: '数据集成', name: 'server-list', icon: 'earth', component: () => import('@/views/metadata/server-list.vue') },
            { path: 'table', title: '表管理', name: 'table-list', icon: 'ios-grid-view', component: () => import('@/views/metadata/table-list.vue') }
        ]
    },
    {
        path: '/development' ,
        icon : 'code-working',
        name : 'development',
        title : '数据开发',
        component: Main,
        children : [
            { path: 'task', title: '任务列表', name: 'task-list', icon: 'network', component: () => import('@/views/development/task-list.vue') },
            { path: 'threshold', title: '阈值报警', name: 'threshold-list', icon: 'stats-bars', component: () => import('@/views/development/threshold-list.vue') }
        ]
    },
    {
        path: '/monitor' ,
        icon : 'monitor',
        name : 'monitor-center',
        title : '监控中心',
        component: Main,
        children : [
            { path: 'record', title: '调度监控', name: 'record-list', icon: 'eye', component: () => import('@/views/monitor/record-list.vue') },
            { path: 'report-auto', title: '自动日报', name: 'report-auto-list', icon: 'pie-graph', component: () => import('@/views/monitor/report-auto-list.vue') }
        ]
    }

    


];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    demo,
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
