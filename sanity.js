import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// connecting to sanity client
const client = sanityClient({
  projectId: 'td4apn50',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
