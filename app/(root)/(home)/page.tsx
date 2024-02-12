import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/card/QuestionCard";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: 1,
    title: "How to use React?",
    description: "I am new to React and I want to learn how to use it.",
    tags: [
      { _id: 1, name: "React" },
      { _id: 2, name: "Javascript" },
    ],
    author: {
      _id: 1,
      name: "John Doe",
      picture: "john-doe.jpg",
    },
    views: 100000,
    answers: [],
    upvotes: 10,
    createdAt: new Date("2021-10-10T12:00:00.000Z"),
  },
  {
    _id: 2,
    title: "How to create a TypeScript project?",
    description:
      "I want to create a TypeScript project and need guidance on how to get started.",
    tags: [
      { _id: 3, name: "TypeScript" },
      { _id: 4, name: "Project Setup" },
    ],
    author: {
      _id: 2,
      name: "Jane Smith",
      picture: "jane-smith.jpg",
    },
    views: 50,
    answers: [],
    upvotes: 5,
    createdAt: new Date("2021-10-11T09:30:00.000Z"),
  },
  {
    _id: 3,
    title: "How to style components in React?",
    description: "I want to learn different ways to style components in React.",
    tags: [
      { _id: 5, name: "React" },
      { _id: 6, name: "CSS-in-JS" },
    ],
    author: {
      _id: 3,
      name: "Alex Johnson",
      picture: "alex-johnson.jpg",
    },
    views: 80,
    answers: [],
    upvotes: 8,
    createdAt: new Date("2021-10-12T15:45:00.000Z"),
  },
  {
    _id: 4,
    title: "How to fetch data from an API in React?",
    description:
      "I need help with fetching data from an API in my React application.",
    tags: [
      { _id: 7, name: "React" },
      { _id: 8, name: "API Integration" },
    ],
    author: {
      _id: 4,
      name: "Mike Thompson",
      picture: "mike-thompson.jpg",
    },
    views: 120,
    answers: [],
    upvotes: 12,
    createdAt: new Date("2021-10-13T11:20:00.000Z"),
  },
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
          questions.map((question) => (
            <QuestionCard
              title={question.title}
              tags={question.tags}
              author={question.author}
              views={question.views}
              answers={question.answers}
              upvotes={question.upvotes}
              createdAt={question.createdAt}
              _id={question._id}
              key={question._id}
            />
          ))
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
