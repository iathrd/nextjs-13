import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatNumber, getTimestamp } from "@/lib/utils";

interface QuestionCardProps {
  _id: number;
  title: string;
  tags: {
    _id: number;
    name: string;
  }[];
  author: {
    _id: number;
    name: string;
    picture: string;
  };
  upvotes: string[];
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  views,
  answers,
  upvotes,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex  flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden ">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 flex w-full flex-wrap gap-3 ">
        <Metric
          imgUrl={author.picture}
          alt="user"
          title={`- asked ${getTimestamp(createdAt)}`}
          textStyles="body-medium text-dark400_light800"
          href={`/profile/${author._id}`}
          value={author.name}
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          title="Votes"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(upvotes.length)}
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Message"
          title="Answers"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(answers.length)}
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          title="Views"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(views)}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
