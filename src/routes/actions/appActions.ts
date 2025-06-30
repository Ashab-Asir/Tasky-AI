import { database } from "@/lib/appwrite";
import { generateID, getUserId } from "@/lib/utils";
import { Task } from "@/types";
import { ActionFunction } from "react-router-dom";

const createTask = async (data: Task) => {
  try {
    return await database.createDocument(
      "6861fc82003dea91525d",
      "6861fcc9003d06fce672",
      generateID(),
      { ...data, userId: getUserId() }
    );

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
const appAction: ActionFunction = async ({ request }) => {
  const data = (await request.json()) as Task;
  if (request.method === "POST") {
    return await createTask(data);
  }
};

export default appAction;
