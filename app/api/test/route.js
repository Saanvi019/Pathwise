export async function GET() {
  return Response.json({
    email: "test@example.com",
    role: "user",
  });
}
