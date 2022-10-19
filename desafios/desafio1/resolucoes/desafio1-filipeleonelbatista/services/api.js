import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GRAPHCMS_URL
})

api.interceptors.request.use(
  (config) => {
    config.headers = {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_PERMANENTAUTH_TOKEN}`
    };
    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
)


const getLast5PostsAndAuthors = {
  query: `query getLast5PostsAndAuthors {
    posts(last: 5, orderBy: publishedAt_DESC) {
      id
      publishedAt
      shortDescription
      title
      thumbnail {
        url
      }
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
    }
    authors(last: 5, orderBy: publishedAt_DESC){
      id
      name
      avatar{
        url
      }
    }
  }
`
};

const getPostById = (post_id) => {
  return {
    query: `query getPostById{
              post(where: {id: "${post_id}"}) {
                id
                title
                content {
                  html
                }
                shortDescription
                publishedAt
                thumbnail {
                  url
                }
                author {
                  id
                  name
                  avatar {
                    url
                  }
                }
              }
            }`
  };
}

const getPostsByAuthorId = (user_id) => {
  return {
    query: `query getPostsByAuthorId {
                    posts(last: 5, where: {author: {id: "${user_id}"}}, orderBy: publishedAt_DESC) {
                      id
                      publishedAt
                      shortDescription
                      title
                      content {
                        html
                      }
                      thumbnail {
                        url
                      }
                    }
                    author(where: {id: "${user_id}"}) {
                      id
                      name
                      avatar {
                        url
                      }
                    }
                  }
                  `
  }
}

export { api, getLast5PostsAndAuthors, getPostById, getPostsByAuthorId }