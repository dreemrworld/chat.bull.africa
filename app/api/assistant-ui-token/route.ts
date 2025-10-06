import { AssistantCloud } from "@assistant-ui/react";

export const maxDuration = 30;

export async function POST(req: Request) {
  // This will be replaced with actual user authentication in the next step
  const userId = "test-user";
  const workspaceId = "test-workspace";

  if (!userId) throw new Error("User not authenticated");

  const assistantCloud = new AssistantCloud({
    apiKey: process.env["ASSISTANT_API_KEY"]!,
    userId,
    workspaceId,
  });
  const { token } = await assistantCloud.auth.tokens.create();

  return new Response(token);
}
