import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://gql.hashnode.com'

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: process.env.HASHNODE_ACCESS_TOKEN!,
  },
})

export interface Post {
  id: string
  title: string
  brief: string
  slug: string
  dateAdded: string
  content: string
  coverImage: {
    url: string
  }
  author: {
    name: string
    profilePicture: string
  }
}

export async function getPosts(page: number, perPage: number): Promise<Post[]> {
  const query = `
    query GetPosts($page: Int!, $perPage: Int!) {
      publication(host: "${process.env.HASHNODE_PUBLICATION_DOMAIN}") {
        posts(page: $page, pageSize: $perPage) {
          edges {
            node {
              id
              title
              brief
              slug
              dateAdded
              coverImage {
                url
              }
              author {
                name
                profilePicture
              }
            }
          }
        }
      }
    }
  `

  const variables = { page, perPage }

  const data = await client.request(query, variables)
  return data.publication.posts.edges.map((edge: any) => edge.node)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const query = `
    query GetPostBySlug($slug: String!) {
      publication(host: "${process.env.HASHNODE_PUBLICATION_DOMAIN}") {
        post(slug: $slug) {
          id
          title
          brief
          slug
          dateAdded
          content
          coverImage {
            url
          }
          author {
            name
            profilePicture
          }
        }
      }
    }
  `

  const variables = { slug }

  try {
    const data = await client.request(query, variables)
    return data.publication.post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function getTotalPostsCount(): Promise<number> {
  const query = `
    query GetTotalPostsCount {
      publication(host: "${process.env.HASHNODE_PUBLICATION_DOMAIN}") {
        posts {
          totalDocuments
        }
      }
    }
  `

  const data = await client.request(query)
  return data.publication.posts.totalDocuments
}

