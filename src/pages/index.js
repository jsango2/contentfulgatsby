import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout';
import ArticlePreview from '../components/article-preview';

class RootIndex extends React.Component {
	render() {
		return (
			<>
				<div>Blog Index</div>
				<div class='snipcart-summary'>
					Number of items: <span class='snipcart-total-items'></span>
					Total price: <span class='snipcart-total-price'></span>
				</div>
				{/* <div
							dangerouslySetInnerHTML={{
								__html: post.body.childMarkdownRemark.html,
							}}
						/> */}
				<button
					class='snipcart-add-item'
					data-item-id='ZadarNightRun2021'
					data-item-price='100'
					data-item-url='http://www.sportzone.hr'
					data-item-description='Super trka'
					data-item-image='/assets/images/starry-night.jpg'
					data-item-name='ZDNIGHTRUN'
				>
					Add to cart
				</button>
				<button class='snipcart-checkout'>Click here to checkout</button>
			</>
		);

		// const siteTitle = get(this, 'props.data.site.siteMetadata.title')
		// const posts = get(this, 'props.data.allContentfulBlogPost.edges')
		// const [author] = get(this, 'props.data.allContentfulPerson.edges')
		// return (
		//   <Layout location={this.props.location}>
		//     <div style={{ background: '#fff' }}>
		//       <Helmet title={siteTitle} />
		//       <Hero data={author.node} />
		//       <div className="wrapper">
		//         <h2 className="section-headline">Recent articles</h2>
		//         <ul className="article-list">
		//           {posts.map(({ node }) => {
		//             return (
		//               <li key={node.slug}>
		//                 <ArticlePreview article={node} />
		//               </li>
		//             )
		//           })}
		//         </ul>
		//       </div>
		//     </div>
		//   </Layout>
		// )
	}
}

export default RootIndex;

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
