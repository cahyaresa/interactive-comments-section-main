import React from "react";
import Content from "./Content";
import Vote from "./Vote";

export default function Reply({ replies }) {
  console.log(replies);
  return (
    <>
      {replies &&
        replies.map((reply) => (
          <div className="reply bg-white w-[80%] ml-auto mr-0 text-right rounded-md flex gap-2 p-5 my-5">
            <Vote score={reply.score} />
            <Content
              content={reply.content}
              user={reply.user}
              createdAt={reply.createdAt}
            />
          </div>
        ))}
    </>
  );
}
