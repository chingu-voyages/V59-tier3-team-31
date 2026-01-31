import { test, expect } from "@playwright/test";

test.describe("Authentication Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should show auth buttons in the header when logged out", async ({
    page,
  }) => {
    const signInBtn = page.getByRole("button", { name: /sign in/i });
    const signUpBtn = page.getByRole("button", { name: /sign up/i });
    await expect(signInBtn).toBeVisible();
    await expect(signUpBtn).toBeVisible();
  });

  test("clicking 'Sign In' should open the Clerk modal", async ({ page }) => {
    await page.getByRole("button", { name: "Sign In" }).click();
    const modalHeader = page.getByRole("heading", { name: /sign in/i });
    await expect(modalHeader).toBeVisible();
  });

  test("clicking 'Sign Up' should open the registration modal", async ({
    page,
  }) => {
    await page.getByRole("button", { name: /sign up/i }).click();
    await expect(page.getByText(/Create your account/i)).toBeVisible();
  });

  test("should show social login buttons in the modal", async ({ page }) => {
    await page.getByRole("button", { name: /sign in/i }).click();
    const socialButtons = page.locator(".cl-socialButtons");
    await expect(socialButtons).toBeVisible();
  });

  test("accessing dashboard should land on the sign-in page", async ({
    page,
  }) => {
    await page.goto("http://localhost:3000/dashboard");
    const signInTitle = page.getByRole("heading", {
      name: "Sign in to My Application",
    });
    await expect(signInTitle).toBeVisible();
  });

  test("clerk modal should use the theme primary color", async ({ page }) => {
    await page.getByRole("button", { name: /sign in/i }).click();
    const primaryBtn = page.getByRole("button", { name: /continue/i });
    await expect(primaryBtn).toHaveCSS("background-color", "rgb(22, 219, 101)");
  });
});
