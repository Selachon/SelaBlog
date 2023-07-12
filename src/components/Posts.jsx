import Post from "./Post"

const Posts = ({ posts }) => {
  let reversedPosts = [...posts]
  reversedPosts.reverse()
  const showPosts = reversedPosts.map((post) =>
    <Post
      post={post}
      key={post.id}
    />
  )
  
  return (
    <div className="md:w-1/2 lg:w-3/5 ml-5">
      <h2 className="font-semibold text-2xl mb-4 text-emerald-500 text-center">Posts</h2>
      {showPosts}
    </div>
  )
}
export default Posts