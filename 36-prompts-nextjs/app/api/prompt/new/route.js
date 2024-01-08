import { connectToDB } from "@utils/database";
import Prompt from "@components/Prompt";

export const PORT = async (req, res) => {
  const { userId, prompt, tag } = await req.json();

  try{
    await connectToDB();

  } catch(error){

  }
};
