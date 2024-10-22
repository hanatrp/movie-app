import NextAuth from "next-auth";
import GithubAuth from "next-auth/providers/github";

const {
  GITHUB_CLIENT: clientId,
  GITHUB_SECRET: clientSecret,
  NEXTAUTH_SECRET: secret,
} = process.env;

if (!clientId || !clientSecret || !secret) {
  throw new Error("Missing environment variables for GitHub authentication.");
}

export const authOption = {
  providers: [
    GithubAuth({
      clientId,
      clientSecret,
    }),
  ],
  secret,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
