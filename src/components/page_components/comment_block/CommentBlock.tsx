export default function CommentBlock({ comment }: any) {
  return (
    <div className="flex gap-2">
      <div
        className="w-[3rem] h-[3rem] p-5 bg-red-800 text-white flex justify-center items-center"
        style={{ borderRadius: "50%" }}
      >
        {comment.firstname[0].toUpperCase() + comment.lastname[0].toUpperCase()}
      </div>
      <div>
        <div>{comment.firstname + " " + comment.lastname}</div>
        <small className="text-gray-400">
          {`${new Date(comment.publishedAt.split("T")[0]).toDateString()} at ${
            comment.publishedAt.split("T")[1]
          }`}
        </small>
        <p className="mt-3">{comment.content}</p>
      </div>
    </div>
  );
}
