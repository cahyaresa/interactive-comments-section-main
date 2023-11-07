import Content from "./Content";
import Reply from "./Reply";
import Vote from "./Vote";

function Card({ comments }) {
  console.log(comments);
  return (
    <>
      <div className="comments-wrapper my-0 mx-auto max-w-4xl">
        {comments &&
          comments.map((item, index) => (
            <div className="wrapper">
              <div className="comment bg-white rounded-md flex gap-4 p-5 my-10">
                <Vote score={item.score} />
                <Content
                  user={item.user}
                  content={item.content}
                  createdAt={item.createdAt}
                />
              </div>
              <Reply replies={item.replies} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Card;
