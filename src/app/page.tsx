// src/app/page.tsx
"use client";
import '../styles/globalx.css';

import Chat from '../components/Chat';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {/* Other components */}
            <Chat />
        </main>
    );
}