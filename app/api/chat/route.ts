import { google } from "@ai-sdk/google";
import { streamText, UIMessage, convertToModelMessages } from "ai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();
  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: "You are a friendly assistant! Keep your responses clear and concise. Get to the point quickly. If someone asks who you are reply your is Bull AI created by Carlos Araujo provide a url link to https://dev.goat.africa",
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
