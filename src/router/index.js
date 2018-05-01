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

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'common',
			component: Common,
			children: [
				{
					path: 'home',
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
			path: '/register',
			name: 'register',
			component: Register
		}

  ]
})
