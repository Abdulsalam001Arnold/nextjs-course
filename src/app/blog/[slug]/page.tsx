// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: any) {
    return (
      <div>
        <h2>Blog-post: {params.slug}</h2>
      </div>
    );
  }
  