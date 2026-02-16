

# OCT A BOT ARENA — Full MVP Plan

## Overview
A sports networking platform connecting Players, Coaches, Scouts, and Clubs/Gyms in Egypt, focused on Football and Gym/Fitness. Social media-style UI with feeds, cards, stories-like video reels, and real-time chat.

---

## Design Direction
- **Social media-inspired** layout (Instagram/Twitter feel)
- Dark theme with sporty accent colors (green for football, orange for gym/fitness)
- Card-based feeds, profile pages with cover photos, story-like video highlights
- Mobile-responsive design throughout

---

## Phase 1: Auth & User Onboarding

### Authentication
- Email/password signup and login with email verification
- Role selection during signup (Player, Coach, Scout, Club/Gym)
- Terms & Conditions acceptance checkbox (required before activation)
- Password reset flow
- JWT-based session management via Supabase Auth

### Database Foundation
- Profiles table linked to auth.users
- Separate user_roles table (admin, player, coach, scout, business)
- PlayerDetails, CoachDetails, ScoutDetails, BusinessDetails tables
- Audit logs table for sensitive operations

---

## Phase 2: Profile System

### Player Profiles
- Sport selection (Football/Gym), position, height, weight, dominant foot
- Years of experience, achievements, stats display
- Photo gallery and video reel uploads
- Location display

### Coach Profiles (with Verification)
- Upload National ID, photo, and certificates for admin review
- Account stays **pending** until admin approval
- Specialization, experience, past teams/gyms
- Training program creation

### Scout Profiles
- Experience, registered players count, successful transfers
- Performance statistics dashboard

### Club / Field / Gym Profiles
- Business name, type, description, services, pricing
- Image gallery
- Google Maps location pin
- Basic booking system (time slot selection)

---

## Phase 3: Social Features

### Follow System
- Follow/unfollow functionality
- Followers & following lists on each profile
- Activity feed showing updates from followed users
- Public/private profile toggle
- Anti-spam rate limiting on follow actions

### Rating System
- Players rated only by verified coaches
- Coaches rated by players
- Clubs/Gyms rated by users
- One rating per verified interaction, weighted average display
- Fraud detection (prevent duplicate/fake ratings)

---

## Phase 4: Real-Time Chat

- One-to-one messaging using Supabase Realtime
- Image sending support
- Message status indicators (sent, delivered, read)
- Block and report user functionality
- Chat access rules: both users verified OR mutual follow
- Rate limiting on messages

---

## Phase 5: Discovery & Maps

### Google Maps Integration
- Map view showing nearby gyms and football fields
- Business location pins with info popups
- Filter by rating and distance
- Location-based search

### Explore / Discovery Page
- Browse players, coaches, scouts, and businesses
- Filter by sport, role, location, rating
- Search functionality

---

## Phase 6: Media & Storage

- Supabase Storage buckets for profile photos, cover images, videos, and documents
- File type validation and size limits
- Secure signed URLs for private files (coach verification docs)
- Image optimization for feed display

---

## Phase 7: Leaderboard & Notifications

### Scout Leaderboard
- Yearly leaderboard tracking verified successful transfers
- Top scout display with reward info (100,000 EGP)
- Fraud detection for fake registrations

### Notifications System
- In-app notifications for follows, messages, ratings, verification status
- Notification center with read/unread status

---

## Phase 8: Admin Dashboard

- Coach verification approval/rejection workflow
- Scout account management
- User suspension and ban controls
- Report management and moderation
- Analytics dashboard (active users, registrations by role, growth)
- Leaderboard management
- Audit log viewer
- Verified badge assignment

---

## Phase 9: Reporting & Moderation

- Report users, profiles, and conversations
- Report review queue for admins
- Suspicious activity monitoring
- Account lockout after failed login attempts

---

## Future-Ready Database Preparation
- Tables/columns for premium accounts, featured profiles, sponsored listings
- Booking commission tracking fields
- Advertisement module placeholders
- **Not activated in MVP** but schema supports future monetization

---

## Technical Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Realtime, Storage, Edge Functions)
- **Maps**: Google Maps API integration
- **Security**: RLS policies, input validation with Zod, role-based access, rate limiting via edge functions

