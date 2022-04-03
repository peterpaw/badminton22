export interface PostType {
  id: string
  title: string
  slug: string
  postPublishDate: Date
  excerpt: string
  featuredImage: {
    url: string
  }
  authors: [
    {
      id: string
      name: string
      slug: string
      foto: {
        url: string
      }
    }
  ]
  categories: [
    {
      name: string
      slug: string
      color: string
    }
  ]
}

export interface PostDetailsType extends PostType {
  seoMetaTag: string
  content: {
    markdown: string
  }
  source: {
    compiledSource: string
  }
}

export interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  pageSize: number
}

export interface AdjacentPostType {
  id: string
  title: string
  slug: string
  postPublishDate: Date
  featuredImage: {
    url: string
  }
  categories: [
    {
      name: string
      slug: string
      color: string
    }
  ]
}

export interface LatestPostsType {
  data: {
    posts: [
      {
        id: string
        title: string
        slug: string
        authors: [
          {
            name: string
          }
        ]
        excerpt: string
        postPublishDate: string
        featuredImage: {
          url: string
        }
        categories: [
          {
            name: string
          }
        ]
      }
    ]
  }
}
