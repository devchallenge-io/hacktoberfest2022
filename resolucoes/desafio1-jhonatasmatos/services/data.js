import { GraphQLClient, gql } from 'graphql-request'

export const getAllPosts = async() => {
  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    {
      posts {
        slug
        title
        description
        coverImage {
            url
            width
            height
          }
        content
        date
        author {
          slug
          name
          profileImage {
            url
            width
            height
          }
        }
      }
    
    }
  `

  return await graphQLClient.request(query)
}

export const getPostBySlug = async(slug) => {

  const endpoint = process.env.HYGRAPH_ENDPOINT

  const graphQLClient = new GraphQLClient(endpoint)

  const query = gql`
    query {
      posts (where: {slug: "${slug}"}) {
        slug
        title
        description
        coverImage {
            url
            width
            height
          }
        content
        date
        author {
          slug
          name
          profileImage {
            url
            width
            height
          }
        }
      }
    }
  `
  return await graphQLClient.request(query)
}