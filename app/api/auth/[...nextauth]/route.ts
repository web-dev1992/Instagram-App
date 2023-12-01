import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET as string, 
  pages: {
    signIn: "/auth/signin",
  },
  callbacks:{
    async session({ session, token, user } ) {
      session.user.username=session.user.name.split(" ").join("").toLocaleLowerCase();
      session.user.uid=token.sub ?? "";
      return session;

  }
}});

export { handler as GET, handler as POST };
