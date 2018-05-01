import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Common from '@/components/common'
import Base from '@/components/base'
import Item from '@/components/item'
import Register from '@/components/register'
import Acount from '@/components/acount'

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
