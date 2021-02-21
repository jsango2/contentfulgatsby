import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

class BlogPostTemplate extends React.Component {
	render() {
		const post = get(this.props, 'data.contentfulRaceOne');
		// const siteTitle = get(this.props, 'data.site.siteMetadata.title');
		return (
			<Layout location={this.props.location}>
				<div style={{ background: '#fff' }}>
					<Helmet title={`${post.nazivUtrke}`} />
					{/* <div className={heroStyles.hero}>
						<Img
							className={heroStyles.heroImage}
							alt={post.title}
							fluid={post.heroImage.fluid}
						/>
					</div> */}
					<div className='wrapper'>
						<h1 className='section-headline'>{post.nazivUtrke}</h1>
						<p
							style={{
								display: 'block',
							}}
						>
							{post.datumUtrke}
						</p>
						<p
							style={{
								display: 'block',
							}}
						>
							{post.opisUtrke}
						</p>
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
							data-item-id={post.nazivUtrke}
							data-item-price='100'
							data-item-url='/blog/o-utrci'
							data-item-description={post.opisUtrke}
							data-item-image='/assets/images/starry-night.jpg'
							data-item-name={post.nazivUtrke}
						>
							Add to cart
						</button>
						<button class='snipcart-checkout'>Click here to checkout</button>
					</div>
				</div>
			</Layout>
		);
	}
}

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug($slug: String!) {
		contentfulRaceOne(slug: { eq: $slug }) {
			nazivUtrke
			datumUtrke
			opisUtrke
		}
	}
`;
