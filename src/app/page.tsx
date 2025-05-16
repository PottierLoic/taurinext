"use client";

import { useState } from "react";
import { invoke } from '@tauri-apps/api/core'

export default function Home() {
  const [word, setWord] = useState<String | null>(null);

  async function hello() {
    const result = await invoke("hello");
    setWord(result as String);
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Template for tauri + NextJS  
        </h1>
        <div className="flex justify-center gap-4">
          <button
            onClick={hello}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
          >
            Hello tauri !
          </button>
        </div>
        <p className="flex justify-center text-black">{word}</p>
      </div>
    </div>
  );
}
