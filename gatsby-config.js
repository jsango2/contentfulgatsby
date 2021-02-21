require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken:
		process.env.CONTENTFUL_ACCESS_TOKEN ||
		process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
	contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided.'
	);
}

module.exports = {
	siteMetadata: {
		title: 'Gatsby Contentful starter',
	},
	pathPrefix: '/gatsby-contentful-starter',
	plugins: [
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
		// {
		// 	resolve: 'gatsby-plugin-snipcartv3',
		// 	options: {
		// 		apiKey: process.env.SNIPCART_API_KEY,

		// 		// autopop: true,
		// 	},
		// },
		{
			resolve: `gatsby-plugin-snipcart-advanced`,
			options: {
				version: '3.0.29',
				publicApiKey: process.env.SNIPCART_API_KEY, // use public api key here or in environment variable
				defaultLang: 'en',
				currency: 'eur',
				openCartOnAdd: false,
				useSideCart: true,
				// be careful with this mode cart. The cart in this mode has a bug of scroll in firefox

				templatesUrl:
					"path on your template file. Set file in the static folder, ex: '/snipcart/index.html'",
				// not work on dev. Gatsby not serve html file in dev https://github.com/gatsbyjs/gatsby/issues/13072
				innerHTML: `
            <billing section="bottom">
                <!-- Customization goes here -->
            </billing>`,
			},
		},
	],
};
