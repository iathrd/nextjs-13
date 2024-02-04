import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  // {
  //   _id: 1,
  //   title: "How to use React?",
  //   description: "I am new to React and I want to learn how to use it.",
  //   tags: [
  //     { _id: 1, name: "React", totalQuestions: 10, showCount: true },
  //     { _id: 2, name: "Javascript", totalQuestions: 10, showCount: true },
  //   ],
  //   authtor: "John Doe",
  //   views: 100,
  //   answers: 10,
  //   upvotes: 10,
  //   downvotes: 0,
  //   createdAt: "2021-10-10T12:00:00.000Z",
  //   updatedAt: "2021-10-10T12:00:00.000Z",
  // },
  // {
  //   _id: 2,
  //   title: "How to create a TypeScript project?",
  //   description:
  //     "I want to create a TypeScript project and need guidance on how to get started.",
  //   tags: [
  //     { _id: 3, name: "TypeScript", totalQuestions: 5, showCount: true },
  //     { _id: 4, name: "Project Setup", totalQuestions: 5, showCount: true },
  //   ],
  //   authtor: "Jane Smith",
  //   views: 50,
  //   answers: 5,
  //   upvotes: 5,
  //   downvotes: 0,
  //   createdAt: "2021-10-11T09:30:00.000Z",
  //   updatedAt: "2021-10-11T09:30:00.000Z",
  // },
  // {
  //   _id: 3,
  //   title: "How to style components in React?",
  //   description: "I want to learn different ways to style components in React.",
  //   tags: [
  //     { _id: 5, name: "React", totalQuestions: 10, showCount: true },
  //     { _id: 6, name: "CSS-in-JS", totalQuestions: 10, showCount: true },
  //   ],
  //   authtor: "Alex Johnson",
  //   views: 80,
  //   answers: 8,
  //   upvotes: 8,
  //   downvotes: 0,
  //   createdAt: "2021-10-12T15:45:00.000Z",
  //   updatedAt: "2021-10-12T15:45:00.000Z",
  // },
  // {
  //   _id: 4,
  //   title: "How to fetch data from an API in React?",
  //   description:
  //     "I need help with fetching data from an API in my React application.",
  //   tags: [
  //     { _id: 7, name: "React", totalQuestions: 10, showCount: true },
  //     { _id: 8, name: "API Integration", totalQuestions: 10, showCount: true },
  //   ],
  //   authtor: "Mike Thompson",
  //   views: 120,
  //   answers: 12,
  //   upvotes: 12,
  //   downvotes: 0,
  //   createdAt: "2021-10-13T11:20:00.000Z",
  //   updatedAt: "2021-10-13T11:20:00.000Z",
  // },
];

function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPostion="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map(() => <p>sss</p>)
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}

export default Home;
