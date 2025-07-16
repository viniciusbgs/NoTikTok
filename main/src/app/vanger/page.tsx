"use client";
import Image from "next/image";
import Link from "next/link";

export default function Vanger() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 relative">
      {/* Top-center heading */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-3xl font-bold text-black">Vanger</h1>
      </div>
      {/* Top-right logos */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
        <Link href="/notiktok" title="NoTikTok">
          <Image src="/tiktok_logo.png" alt="TikTok Logo" width={40} height={40} style={{ borderRadius: 8 }} />
        </Link>
        <Link href="/spotify" title="Spotify">
          <Image src="/spotify_logo.png" alt="Spotify Logo" width={40} height={40} style={{ borderRadius: 8 }} />
        </Link>
      </div>
      {/* Main content - Vanger Image */}
      <main className="flex-1 flex items-center justify-center w-full">
        <div className="max-w-4xl w-full">
          <Image 
            src="/VangerBooby.png" 
            alt="Vanger" 
            width={300} 
            height={225}
            style={{ 
              width: '100%', 
              height: 'auto'
            }}
          />
        </div>
      </main>
    </div>
  );
} 