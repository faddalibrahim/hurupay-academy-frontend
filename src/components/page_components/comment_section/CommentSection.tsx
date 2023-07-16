"use client";
import Button from "@components/re_usables/button/Button";
import CommentBlock from "../comment_block/CommentBlock";
import { postComment } from "@network/functions";
import { useState } from "react";

export default function CommentSection({ comments, articleId }: any) {
  const [allComments, setAllComments] = useState(comments ?? []);
  let userCommentData = localStorage.hurupay_academy_blog;

  console.log(allComments);

  const addComment = async (e: any) => {
    e.preventDefault();
    let userCommentData =
      JSON.parse(localStorage?.hurupay_academy_blog ?? "{}") ?? {};
    let firstname =
      e.target?.firstname?.value?.trim() ?? userCommentData.firstname ?? "";
    let lastname =
      e.target?.lastname?.value?.trim() ?? userCommentData.lastname ?? "";
    let email = e.target?.email?.value?.trim() ?? userCommentData.email ?? "";
    let comment = e.target?.comment?.value?.trim();
    let userHasAgreed =
      e.target?.agreed?.checked ?? userCommentData.userHasAgreed ?? false;

    for (let field of [firstname, lastname, email, comment]) {
      if (field.length === 0) {
        alert("Please enter all fields");
        return;
      }
    }

    if (userHasAgreed) {
      localStorage.hurupay_academy_blog = JSON.stringify({
        firstname,
        lastname,
        email,
      });
    }

    try {
      let res = await postComment(
        { firstname, lastname, email, comment },
        articleId
      );
      console.log(res);

      if (res.data) {
        let newCommentData = res.data;
        setAllComments({ data: [newCommentData, ...allComments.data] });
        e.target.comment.value = "";
        alert("your comment has been added");
        return;
      }

      alert("Sorry, something went wrong; try again in a few minutes");
    } catch (error: any) {
      alert("Sorry, something went wrong; try again in a few minutes");
    }
  };

  return (
    <section className="py-5">
      <form className="flex flex-col gap-4" onSubmit={addComment}>
        {!userCommentData && (
          <div className="flex flex-wrap justify-between gap-4">
            <input
              type="text"
              placeholder="first name"
              required
              className="border border-[#E6E8EA] outline-none rounded px-5 py-5 w-full md:w-fit"
              name="firstname"
            />
            <input
              type="text"
              placeholder="last name"
              required
              className="border border-[#E6E8EA] outline-none rounded px-5 py-5 w-full md:w-fit"
              name="lastname"
            />
            <input
              type="email"
              placeholder="email"
              required
              className="border border-[#E6E8EA] outline-none rounded px-5 py-5 w-full md:w-fit"
              name="email"
            />
          </div>
        )}

        <div>
          <textarea
            placeholder="comment"
            required
            className="border border-[#E6E8EA] outline-none rounded px-5 py-5 w-full"
            name="comment"
          ></textarea>
        </div>
        <div className="flex flex-col gap-3 justify-start items-start">
          {!userCommentData && (
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                className="accent-[#FFA800] w-15 h-15"
              />
              <label htmlFor="agreed" className="cursor-pointer">
                <small>
                  Save my name and email in this browser for the next time I
                  comment.
                </small>
              </label>
            </div>
          )}

          <Button>Submit Comment</Button>
        </div>
      </form>
      <div className="py-8 flex flex-col gap-7">
        {allComments?.data?.map((comment: any) => (
          <CommentBlock
            key={comment.attributes.id}
            comment={comment.attributes}
          />
        ))}
      </div>
    </section>
  );
}
