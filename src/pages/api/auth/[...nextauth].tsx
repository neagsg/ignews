import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { query as q } from 'faunadb'
// import { FaunaAdapter } from '@next-auth/fauna-adapter'

import { fauna } from '../../../services/fauna'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // adapter: FaunaAdapter(fauna),

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const { email: userEmail } = user

        await fauna.query(
          q.Create(
            q.Collection('users'),
            { data: { userEmail } }
          )
        )
      return true
    }
  }
})