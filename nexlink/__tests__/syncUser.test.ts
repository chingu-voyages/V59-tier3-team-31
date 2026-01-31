import { expect, test, vi, beforeEach, describe } from "vitest";
import { syncUser } from "@/lib/sync-user";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

vi.mock("@clerk/nextjs/server", () => ({
  currentUser: vi.fn(),
}));

vi.mock("@/lib/db", () => ({
  db: {
    user: {
      upsert: vi.fn(),
    },
  },
}));

describe("syncUser Action", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should return null if no user is found in Clerk", async () => {
    vi.mocked(currentUser).mockResolvedValue(null);
    const result = await syncUser();
    expect(result).toBeNull();
    expect(db.user.upsert).not.toHaveBeenCalled();
  });

  test("should sync user data to database if Clerk user exists", async () => {
    const mockClerkUser = {
      id: "user_123",
      firstName: "abc",
      lastName: "xyz",
      emailAddresses: [{ emailAddress: "abc@example.com" }],
    };
    vi.mocked(currentUser).mockResolvedValue(mockClerkUser as any);

    const mockDbUser = {
      id: "db_1",
      clerkId: "user_123",
      email: "abc@example.com",
    };
    vi.mocked(db.user.upsert).mockResolvedValue(mockDbUser as any);
    const result = await syncUser();

    expect(db.user.upsert).toHaveBeenCalledWith({
      where: { clerkId: "user_123" },
      update: expect.objectContaining({ email: "abc@example.com" }),
      create: expect.objectContaining({ clerkId: "user_123" }),
    });
    expect(result).toEqual(mockDbUser);
  });
});

test("should throw an error if the database upsert fails", async () => {
  vi.mocked(currentUser).mockResolvedValue({
    id: "user_123",
    emailAddresses: [{ emailAddress: "abc@example.com" }],
  } as any);

  vi.mocked(db.user.upsert).mockRejectedValue(
    new Error("DB Connection Failed"),
  );

  await expect(syncUser()).rejects.toThrow("DB Connection Failed");
});
