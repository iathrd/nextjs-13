import { getUserQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import QuestionCard from "../card/QuestionCard";

interface QuestionTabProps extends SearchParamsProps {
  userId: string;
  clerkId?: string;
}

const QuestionTab = async ({
  searchParams,
  userId,
  clerkId,
}: QuestionTabProps) => {
  const result = await getUserQuestions({ userId, page: 1 });

  return (
    <>
      {result.questions.map((question) => (
        <QuestionCard
          title={question.title}
          tags={question.tags}
          clerkId={clerkId}
          author={question.author}
          views={question.views}
          answers={question.answers}
          upvotes={question.upvotes.length}
          createdAt={question.createdAt}
          _id={question._id}
          key={question._id}
        />
      ))}
    </>
  );
};

export default QuestionTab;
