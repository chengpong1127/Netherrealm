"use client";
import { useState } from "react";

import { Scene } from "@/components/scene";
import { scenes } from "@/data/scenes";
import { PageNavigator } from "@/components/page-navigator";

export default function Home() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const handleNextScene = (delta: number) => {
    setCurrentSceneIndex((prevIndex) => {
      const nextIndex = prevIndex + delta;

      if (nextIndex < 0) return 0;
      if (nextIndex >= scenes.length) return scenes.length - 1;

      return nextIndex;
    });
  };

  return (
    <section className="w-full h-full">
      {process.env.NODE_ENV === "development" && (
        <PageNavigator
          currentPage={currentSceneIndex}
          totalPages={scenes.length}
          onPageChange={setCurrentSceneIndex}
        />
      )}
      <Scene
        scene={scenes[currentSceneIndex]}
        onChangeScene={handleNextScene}
      />
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-2 right-2 bg-black text-white text-xs p-2 rounded">
          <span className="block sm:hidden">xs</span>
          <span className="hidden sm:block md:hidden">sm</span>
          <span className="hidden md:block lg:hidden">md</span>
          <span className="hidden lg:block xl:hidden">lg</span>
          <span className="hidden xl:block 2xl:hidden">xl</span>
          <span className="hidden 2xl:block">2xl</span>
        </div>
      )}
    </section>
  );
}
