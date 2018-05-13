import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Common from '@/components/common'
import Base from '@/components/base'
import Item from '@/components/item'
import Register from '@/components/register'
import Acount from '@/components/acount'
import Policy from '@/components/policy'
import Central from '@/components/Central'
import Countryside from '@/components/countryside'
import Science from '@/components/science'
import Technology from '@/components/technology'
import Backstage from '@/components/backstage'
import Backcommon from '@/components/backcommon'
import Admin from '@/components/admin'
import User from '@/components/backuser'
import Count from '@/components/count'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'common',
			component: Common,
			children: [
				{
					path: '/',
					name: 'HelloWorld',
					component: HelloWorld
				},
				{
					path: '/base',
					name: 'Base',
					component: Base
		        },
				{
					path: '/policy',
					name: 'Policy',
					component: Policy
				},
				{
					path: '/central',
					name: 'Central',
					component: Central
				},
				{
					path: '/countryside',
					name: 'Countryside',
					component: Countryside
				},
				{
					path: '/science',
					name: 'Science',
					component: Science
				},
				{
					path: '/technology',
					name: 'Technology',
					component: Technology
				},
				{
					path: '/item/:id',
					name: 'item',
					component: Item
				},
				{
					path: 'acount',
					name: 'acount',
					component: Acount
				}
			]
        },
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/back',
			name: 'backcommon',
			component: Backcommon,
			children: [
				{
					path: '/back',
					name: 'backstage',
					component: Backstage
				},{
					path: '/admin',
					name: 'admin',
					component: Admin
				},{
					path: '/user',
					name: 'user',
					component: User
				},{
					path: '/count',
					name: 'count',
					component: Count
				}
			]

		}

  ]
})
