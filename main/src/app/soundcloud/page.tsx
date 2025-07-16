import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SoundCloudMock() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 to-yellow-200 flex flex-col items-center p-8 relative">
      {/* Top-center heading */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-3xl font-bold text-white">Tutryx</h1>
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
      <header className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-white">SoundCloud</h1>
        {/* Removed 'Sign in' button */}
      </header>
      <main className="w-full max-w-3xl bg-white rounded-lg shadow p-6 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-orange-300 rounded-full" />
          <div>
            <h2 className="text-xl font-bold text-orange-500">Artist Name</h2>
            <p className="text-gray-600">Track Title</p>
          </div>
        </div>
        <div className="h-2 bg-orange-200 rounded-full w-full mb-4" />
        <div className="flex justify-between items-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Play</button>
          <span className="text-gray-500">0:00 / 3:45</span>
        </div>
      </main>
    </div>
  );
} 