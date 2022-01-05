import { MDXRemote } from "next-mdx-remote"
import { IPost } from "pages/presse/[slug]"

const Post = ({ post }: { post: IPost }) => {
  return (
    <main className="py-16 container mx-auto text-center">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <h2 className="py-2">{`von ${post.author.name}`}</h2>
      <h2 className="pb-4">{post.postPublishDate}</h2>
      <img src={post.featuredImage.url} alt={post.title} className="my-4" />
      <div className="text-left">
        <MDXRemote
          {...post.source}
          components={{
            p: (props: any) => <p className="p-2">{props.children}</p>,
            h1: (props: any) => (
              <h1 className="p-2 text-2xl">{props.children}</h1>
            ),
            h2: (props: any) => (
              <h2 className="p-2 text-2xl">{props.children}</h2>
            ),
            h3: (props: any) => (
              <h3 className="p-2 text-2xl">{props.children}</h3>
            ),
            h4: (props: any) => (
              <h4 className="p-2 text-2xl">{props.children}</h4>
            ),
            h5: (props: any) => (
              <h5 className="p-2 text-2xl">{props.children}</h5>
            ),
            h6: (props: any) => (
              <h6 className="p-2 text-2xl">{props.children}</h6>
            )
          }}
        />
      </div>
    </main>
  )
}

export default Post
