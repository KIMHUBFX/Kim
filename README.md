# FootballHub ⚽🔴⚫

FootballHub is an Instagram-style football social platform where everyone can create an account, publish football photos/videos, follow users, like, comment, and share content.

## Stack

- Expo + React Native + TypeScript
- Expo Router
- Supabase Auth and PostgreSQL
- Red, black, and white visual theme

## Run locally

1. Install Node.js LTS.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and add your Supabase project URL and anon key.
4. Run the app:

   ```bash
   npx expo start
   ```

## Database

Open the Supabase SQL Editor and run `supabase/schema.sql`.

## Current foundation

The repository includes the welcome screen, authentication screen, home-feed placeholder, create-post placeholder, theme constants, Supabase client, types, and initial database schema.

Next implementation stages: media picker/upload, real feed queries, profiles, follows, likes, comments, notifications, reels, direct messages, moderation, and production deployment.
