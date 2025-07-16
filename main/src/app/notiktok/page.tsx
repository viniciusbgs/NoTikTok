"use client";

import Link from "next/link";

export default function MainPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center mb-4">
        <div className="flex flex-row items-center justify-center gap-6">
          {/* TikTok SVG Logo - Left */}
          <svg width="128" height="128" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#000" />
            <path d="M44.5 25.5c-2.5 0-4.5-2-4.5-4.5V16h-6v22c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V26c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V32c2.1 1.3 4.5 2 7 2v-6.5z" fill="#25F4EE"/>
            <path d="M44.5 27.5c-2.5 0-4.5-2-4.5-4.5V18h-4v20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V28c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V34c2.1 1.3 4.5 2 7 2v-8.5z" fill="#FE2C55"/>
            <path d="M44.5 29.5c-2.5 0-4.5-2-4.5-4.5V20h-2v18c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V30c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V36c2.1 1.3 4.5 2 7 2v-10.5z" fill="#fff"/>
          </svg>
          <h1 className="text-5xl font-bold text-white mt-4">NoTikTok</h1>
          {/* TikTok SVG Logo - Right */}
          <svg width="128" height="128" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#000" />
            <path d="M44.5 25.5c-2.5 0-4.5-2-4.5-4.5V16h-6v22c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V26c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V32c2.1 1.3 4.5 2 7 2v-6.5z" fill="#25F4EE"/>
            <path d="M44.5 27.5c-2.5 0-4.5-2-4.5-4.5V18h-4v20c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V28c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V34c2.1 1.3 4.5 2 7 2v-8.5z" fill="#FE2C55"/>
            <path d="M44.5 29.5c-2.5 0-4.5-2-4.5-4.5V20h-2v18c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.3 0 .7.1 1 .1V30c-.3 0-.7-.1-1-.1-5 0-9 4-9 9s4 9 9 9 9-4 9-9V36c2.1 1.3 4.5 2 7 2v-10.5z" fill="#fff"/>
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link
          href="/spotify"
          className="text-xl text-zinc-300 hover:text-green-500 transition font-semibold"
        >
          spotify
        </Link>
        <Link
          href="/soundcloud"
          className="text-xl text-zinc-300 hover:text-orange-500 transition font-semibold"
        >
          soundcloud
        </Link>
      </div>
    </div>
  );
} 