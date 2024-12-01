# Hashnode-Powered Next.js Developer Blog

This project is a developer blog built with Next.js 14 (App Router) and powered by Hashnode's headless CMS. It provides a flexible and powerful platform for developers to showcase their blog posts with excellent performance and SEO capabilities.

## Technologies Used

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Hashnode API (GraphQL)

## Features

- Dynamic blog post rendering
- Pagination for blog posts
- Individual blog post pages
- SEO optimization with dynamic metadata
- Responsive design for various screen sizes
- Server-side rendering and static site generation capabilities
- Cover image and author information display

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm or yarn

You'll also need a Hashnode account with an active publication.

## Getting Started

1. Clone the repository:
   \`\`\`
   git clone https://github.com/yourusername/hashnode-nextjs-blog.git
   cd hashnode-nextjs-blog
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
   or
   \`\`\`
   yarn install
   \`\`\`

3. Set up environment variables:
   Create a \`.env.local\` file in the root directory and add the following:
   \`\`\`
   HASHNODE_ACCESS_TOKEN=your_hashnode_access_token
   HASHNODE_PUBLICATION_DOMAIN=your_publication_domain.hashnode.dev
   \`\`\`
   Replace the placeholder values with your actual Hashnode credentials.

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`
   or
   \`\`\`
   yarn dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- \`app/\`: Contains the main application code (pages and layouts)
- \`components/\`: Reusable React components
- \`lib/\`: Utility functions and API calls
- \`public/\`: Static assets

## Key Components

- \`app/page.tsx\`: Home page displaying recent blog posts
- \`app/blogs/page.tsx\`: Blog listing page with pagination
- \`app/blogs/[slug]/page.tsx\`: Individual blog post page
- \`lib/hashnode.ts\`: Hashnode API integration using GraphQL

## Customization

You can customize the design by modifying the Tailwind CSS classes in the components. To add new features or modify existing ones, refer to the Next.js and Hashnode API documentation.

## Hashnode API Integration

This project uses Hashnode's GraphQL API to fetch blog posts and related data. The integration is handled in the \`lib/hashnode.ts\` file. Key features include:

- Fetching a list of blog posts with pagination
- Retrieving individual blog posts by slug
- Getting the total count of blog posts
- Fetching cover images and author information for each post

Make sure to keep your Hashnode access token secure and never commit it to version control.

## Deployment

This project is ready to be deployed on Vercel, which provides an optimal environment for Next.js applications. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Hashnode API Documentation](https://api.hashnode.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GraphQL Request Library](https://github.com/prisma-labs/graphql-request)
