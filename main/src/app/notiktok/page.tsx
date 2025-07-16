"use client";

import Link from "next/link";

export default function NotiTok() {
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
      <div className="flex flex-col items-center gap-2 mb-2">
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
        <Link
          href="/vanger"
          className="text-xl text-zinc-300 hover:text-blue-400 transition font-semibold"
        >
          vanger
        </Link>
      </div>
      {/* Local Video Player */}
      <div className="mt-8">
        <h2 className="text-lg font-light text-zinc-400 mb-4 text-center">
          The only TikTok you'll ever need
        </h2>
        <div className="relative">
          <video 
            controls 
            loop
            width="325" 
            height="575"
            style={{ 
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              backgroundColor: "#000"
            }}
          >
            <source src="/videos/vanger.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* TikTok Action Icons - Positioned on top of video */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4">
            {/* Like Icon */}
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white hover:text-red-500 transition cursor-pointer">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-white text-xs font-medium">222k</span>
            </div>
            
            {/* Comment Icon */}
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white hover:text-blue-400 transition cursor-pointer">
                <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
              <span className="text-white text-xs font-medium">216k</span>
            </div>

            {/* Share Icon */}
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white hover:text-green-400 transition cursor-pointer">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
              </svg>
              <span className="text-white text-xs font-medium">Share</span>
            </div>

            {/* Favorite/Bookmark Icon */}
            <div className="flex flex-col items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white hover:text-yellow-400 transition cursor-pointer">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
              <span className="text-white text-xs font-medium">Save</span>
            </div>

            {/* Music Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <span className="text-white text-xs font-medium">Music</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 