"use client";

import { Home as HomeIcon, Search, Library } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SpotifyHome() {
  return (
    <div className="h-screen flex flex-col relative">
      {/* Top-center heading */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <h1 className="text-3xl font-bold text-white">Vini</h1>
      </div>
      {/* Top-right logos */}
      <div className="absolute top-4 right-4 flex items-center gap-4 z-10">
        <Link href="/notiktok" title="NoTikTok">
          <Image src="/tiktok_logo.png" alt="TikTok Logo" width={40} height={40} style={{ borderRadius: 8 }} />
        </Link>
        <Link href="/soundcloud" title="SoundCloud">
          <Image src="/soundcloud_logo.png" alt="SoundCloud Logo" width={40} height={40} style={{ borderRadius: 8 }} />
        </Link>
      </div>
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-xs font-semibold text-zinc-100"
            >
              <Library />
              Your Library
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          {/* Removed 'Abrir SoundCloud Mock' button */}
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
} 