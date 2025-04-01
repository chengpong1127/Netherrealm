"use client";
import { useState } from "react";

import { Scene } from "@/components/scene";
import { scenes } from "@/data/scenes";
import { PageNavigator } from "@/components/page-navigator";

export default function Home() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  const handleNextScene = (delta: number) => {
    setCurrentSceneIndex((prevIndex) => (prevIndex + delta) % scenes.length);
  };

  return (
    <section className="w-full h-full">
      <PageNavigator
        currentPage={currentSceneIndex}
        totalPages={scenes.length}
        onPageChange={setCurrentSceneIndex}
      />
      <Scene
        scene={scenes[currentSceneIndex]}
        onChangeScene={handleNextScene}
      />
    </section>
  );
}
