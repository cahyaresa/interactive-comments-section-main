import React from "react";
import replyButton from "../../../src/assets/images/icon-reply.svg";

export default function Content({ content, user, createdAt }) {
  return (
    <>
      <div className="comment_content flex flex-col gap-5 ">
        <div className="comment__header flex justify-between">
          <div className="user font-semibold flex gap-3 w-full text-gray-600">
            <img className="w-8 h-8" src={user.image.png} alt={user.username} />
            <span>{user.username}</span>
            <span>{createdAt}</span>
          </div>
          <div className="reply_button">
            <img src={replyButton} alt="reply comment" />
          </div>
        </div>
        <div className="comment__content">
          <div className="text-gray-500">
            {}
            {content}
          </div>
        </div>
      </div>
    </>
  );
}
