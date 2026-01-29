import { db } from "@/lib/db";

export default async function TestPage() {
  try {
    const userCount = await db.user.count();
    return (
      <div className="p-10">
        <h1 className="text-green-600 font-bold">Database Connected</h1>
        <p>User count in Neon: {userCount}</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="p-10 text-red-600">
        <h1>Database Connection Failed</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}
