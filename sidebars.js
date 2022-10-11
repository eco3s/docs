// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	sidebar: [
		'README',
		{
			type: 'category',
			label: 'Types',
			link: {
				type: 'doc',
				id: 'types/README',
			},
			items: [
				{
					type: 'category',
					label: 'Primitive Type',
					link: {
						type: 'doc',
						id: 'types/primitive/README',
					},
					items: [
						'types/primitive/boolean',
						'types/primitive/integer',
						'types/primitive/double',
						'types/primitive/string',
					],
				},
				{
					type: 'category',
					label: 'Semantic Type',
					link: {
						type: 'doc',
						id: 'types/semantic/README',
					},
					items: [
						'types/semantic/uuid',
						'types/semantic/token',
						'types/semantic/date',
						'types/semantic/image',
						'types/semantic/category',
					],
				},
				{
					type: 'category',
					label: 'Schema Type',
					link: {
						type: 'doc',
						id: 'types/schema/README',
					},
					items: [
						'types/schema/user',
						'types/schema/post',
						'types/schema/post-preview',
					],
				},
				{
					type: 'category',
					label: 'Error',
					link: {
						type: 'doc',
						id: 'types/error/README',
					},
					items: [],
				},
			],
		},
		{
			API: {
				users: ['api/users/get-users', 'api/users/get-user'],
				posts: [
					'api/posts/get-posts',
					'api/posts/get-post',
					'api/posts/create-post',
					'api/posts/edit-post',
					'api/posts/delete-post',
				],
			},
		},
	],
}

module.exports = sidebars
