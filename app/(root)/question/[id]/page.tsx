import Metric from "@/components/shared/Metric";
import ParseHTML from "@/components/shared/ParseHTML";
import { getQuestionById } from "@/lib/actions/question.action";
import { formatNumber, getTimestamp } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const result = await getQuestionById({ questionId: params.id });

  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clrekId}`}
            className="flex items-center justify-start gap-1"
          >
            <Image
              src={result.author.picture}
              className="rounded-full"
              width={22}
              height={22}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700">
              {result.author.name}
            </p>
          </Link>
          <div className="flex justify-end">Voting</div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full text-left">
          {result.title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/assets/icons/clock.svg"
          alt="clock icon"
          title="Asked"
          textStyles="small-medium text-dark400_light800"
          value={` asked ${getTimestamp(result.createdAt)}`}
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="Message"
          title="Answers"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(result.answers.length)}
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          title="Views"
          textStyles="small-medium text-dark400_light800"
          value={formatNumber(result.views)}
        />
      </div>
      <ParseHTML data={result.content} />
    </>
  );
};

export default Page;