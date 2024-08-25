import { FaUserFriends } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import {
    HiOutlineViewGrid,
    HiOutlineQuestionMarkCircle

} from 'react-icons/hi'
import { LiaComments } from 'react-icons/lia'
import { MdPostAdd } from 'react-icons/md'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/admin',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'users',
        label: 'Users',
        path: '/admin/users',
        icon: <FaUserFriends />
    },
    {
        key: 'roles',
        label: 'Roles',
        path: '/admin/roles',
        icon: <FaUserFriends />
    },
    {
        key: 'posts',
        label: 'Posts',
        path: '/admin/posts',
        icon: <MdPostAdd />
    },
    {
        key: 'comments',
        label: 'Comments',
        path: '/admin/comments',
        icon: <LiaComments />
    },
    {
        key: 'likes',
        label: 'Likes',
        path: '/admin/likes',
        icon: <FcLike />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    // {
    //     key: 'settings',
    //     label: 'Settings',
    //     path: '/settings',
    //     icon: <HiOutlineCog />
    // },
    {
        key: 'support',
        label: 'Help & Support',
        path: '/admin/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]