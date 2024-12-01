import Link from 'next/link'
import { getPosts, getTotalPostsCount } from '@/lib/hashnode'

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
  const postsPerPage = 10
  const totalPosts = await getTotalPostsCount()
  const totalPages = Math.ceil(totalPosts / postsPerPage)

  const posts = await getPosts(currentPage, postsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link href={`/blogs/${post.slug}`} key={post.id} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.brief}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        {currentPage > 1 && (
          <Link
            href={`/blogs?page=${currentPage - 1}`}
            className="text-blue-600 hover:underline"
          >
            Previous Page
          </Link>
        )}
        {currentPage < totalPages && (
          <Link
            href={`/blogs?page=${currentPage + 1}`}
            className="text-blue-600 hover:underline"
          >
            Next Page
          </Link>
        )}
      </div>
    </div>
  )
}

