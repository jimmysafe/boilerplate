import Prismic from 'prismic-javascript'
 
export const apiEndpoint = process.env.PRISMIC_API_ENDPOINT
export const accessToken = ''


// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)
 
const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  } else if(doc.type === 'blog_post'){
    return `/blog/${doc.uid}`
  }
  return '/'
}

export const hrefResolver = (doc) => {
  if (doc.type === 'page') {
    return '/[page]'
  } else if (doc.type === 'blog_post') {
    return '/blog/[post]'
  }
  return '/'
}
