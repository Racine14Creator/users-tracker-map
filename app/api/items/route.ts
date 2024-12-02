import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/lib/mongodb";
import { Items } from "@/models/Items";

// type ResponseData = {
//   success: boolean;
//   data?: any; // Use `any` for flexibility or replace with a stricter type
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Ensure database connection is established
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        // Retrieve items from the database
        const items = await Items.find({});
        res.status(200).json({ success: true, data: items });
      } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ success: false }); // Use 500 for server errors
      }
      break;

    case "POST":
      try {
        // Create a new item in the database
        const item = await Items.create(req.body);
        res.status(201).json({ success: true, data: item });
      } catch (error) {
        console.error("Error creating item:", error);
        res.status(400).json({ success: false }); // 400 for bad requests
      }
      break;

    default:
      // Handle unsupported methods
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).json({ success: false }); // 405 for Method Not Allowed
      break;
  }
}
