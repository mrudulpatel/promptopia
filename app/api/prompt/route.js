import { connectToDatabase } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (req) => {
  try {
    await connectToDatabase();

    const prompts = await Prompt.find({}).populate("creator");
    console.log(prompts);
    return new Response(JSON.stringify(prompts), {
      status: 200,
    });
    
  } catch (error) {
    return new Response("Failed to fetch all prompts!!", {
        status: 500,
      });
  }
};
