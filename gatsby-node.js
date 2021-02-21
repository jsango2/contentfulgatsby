const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		const blogPost = path.resolve('./src/templates/blog-post.js');
		resolve(
			graphql(
				`
					{
						allContentfulRaceOne {
							edges {
								node {
									nazivUtrke
									slug
								}
							}
						}
					}
				`
			).then((result) => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				const posts = result.data.allContentfulRaceOne.edges;
				posts.forEach((post) => {
					createPage({
						path: `/blog/${post.node.slug}/`,
						component: blogPost,
						context: {
							slug: post.node.slug,
						},
					});
				});
			})
		);
	});
};
