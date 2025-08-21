import { Metadata } from "next";
import { GrokSvg } from "@/components/svg";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `User ${params.userId} posted ${params.postId}`,
    description: `User ${params.userId} posted ${params.postId}`,
  };
}

export default function UserPost({ params }: any) {
  return (
    <div>
      <h2>
        User post for nested dynamic routes: {params.userId} - {params.postId}
      </h2>
      <GrokSvg />
    </div>
  );
}
