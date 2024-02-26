"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose";
import { ViewQuestionParams } from "./shared.types";
import Interaction from "@/database/interaction.model";

export async function viewQuestion(params: ViewQuestionParams) {
  try {
    await connectToDatabase();

    const { questionId, userId } = params;

    await Question.findByIdAndUpdate(questionId, { $inc: { views: 1 } });

    if (userId) {
      const exisitingInteraction = await Interaction.findOne({
        user: userId,
        question: questionId,
        action: "view",
      });

      if (exisitingInteraction) return console.log("User has already viewed");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}
