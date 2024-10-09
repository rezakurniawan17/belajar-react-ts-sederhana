import { IPost } from "../types";
import { ThumbsDown, ThumbsUp, Eye } from "lucide-react";

export default function CardPost({ post: post }: { post: IPost }) {
  return (
    <div
      className="p-3 border rounded-lg group hover:bg-green-50 hover:border-green-400 h-fit"
      key={post.id}
    >
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold group-hover:text-green-500">
          {post.title}
        </p>
        <p className="text-sm text-slate-600">{post.body}</p>
        <div className="flex justify-end gap-2 mt-4 text-sm text-slate-500">
          <div className="flex items-center gap-0.5 ">
            <Eye size="16" /> {post.views}
          </div>
          <div className="flex items-center gap-0.5 text-red-500">
            <ThumbsDown size="16" /> {post.reactions.dislikes}
          </div>
          <div className="flex items-center gap-0.5  text-green-500">
            <ThumbsUp size="16" /> {post.reactions.likes}
          </div>
        </div>
      </div>
    </div>
  );
}
