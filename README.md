# ChatFlow

ChatFlow is a modern team collaboration platform supercharged with AI features. Built with Next.js, it provides seamless team collaboration with intelligent AI capabilities that help teams communicate faster, work smarter, and stay organized effortlessly.

## Features

- **AI-Powered Collaboration**: Intelligent features that enhance team productivity
- **Modern UI/UX**: Built with Next.js, Tailwind CSS, and Radix UI components
- **Authentication**: Integrated with Kinde Auth for secure user management
- **Dark Mode**: Full dark mode support with theme switching
- **Responsive Design**: Mobile-first responsive design that works on all devices

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Authentication**: Kinde Auth
- **Theme Management**: next-themes

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Recent Updates

### Hero Section Enhancements

- **Updated Hero Content**: 
  - Heading: "Team collaboration, supercharged with AI"
  - Description: Emphasizes seamless team collaboration with intelligent AI features

- **Logo Section Improvements**:
  - Responsive grid layout: 2 columns on small devices, 4 columns on medium and above
  - Centered alignment: Logos are centered both horizontally and vertically
  - Enhanced spacing: Added proper gap spacing (gap-8) between logos with padding on each logo container
  - Company logos: Integrated logos from local assets (Arcjet, Kinde, Motion, Neon, ORPC, Prisma, Vercel)

- **Component Structure**:
  - Hero section moved to `app/(marketing)/_components/hero-section.tsx`
  - Improved responsive design and layout consistency

## Project Structure

```
chatflow/
├── app/
│   ├── (marketing)/
│   │   ├── _components/
│   │   │   └── hero-section.tsx
│   │   └── page.tsx
│   ├── api/
│   │   └── auth/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   └── ui/          # Radix UI components
├── lib/
│   ├── theme-provider.tsx
│   └── utils.ts
└── public/
    ├── companies/   # Company logo assets
    └── logo.svg
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
