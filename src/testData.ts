export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
    // posts: PostProps[];
}

export interface PostProps {
    id: number;
    title: string;
    content: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export const testData: ColumnProps[] = [
    {
        id:1,
        title:'test1专栏',
        description:"使用 Typescript + Vue3 开发高仿知乎专栏文档站点",
        avatar:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id:2,
        title:'test2专栏',
        description:"使用 Typescript + Vue3 开发高仿知乎专栏文档站点",
        avatar:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id:3,
        title:'test3专栏',
        description:"使用 Typescript + Vue3 开发高仿知乎专栏文档站点",
        avatar:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    },
    {
        id:4,
        title:'test4专栏',
        description:"使用 Typescript + Vue3 开发高仿知乎专栏文档站点",
        avatar:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
    }
]

export const testPosts: PostProps[] = [
    {
        id: 1,
        title: '撒旦大苏打倒萨倒萨',
        content: '全网首发，2020年最火技术双剑合璧，Vue3 配合 Typescript ，使用新版Vuex 和 Vue-Router 全家桶完成前后端分离复杂项目',
        image:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
        createdAt: '2020-08-11 10:33:33',
        columnId: 1
    },
    {
        id: 2,
        title: '撒旦大苏打倒萨倒萨',
        content: '全网首发，2020年最火技术双剑合璧，Vue3 配合 Typescript ，使用新版Vuex 和 Vue-Router 全家桶完成前后端分离复杂项目',
        image:'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
        createdAt: '2020-08-11 10:33:33',
        columnId: 1
    }
]
