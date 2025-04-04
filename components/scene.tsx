import Image from "next/image";
import clsx from "clsx";
import { Divider } from "@heroui/divider";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence import
import { useEffect, useRef } from "react";

import { useTypewriterEffect } from "@/hooks/useTypewriterEffect";
import IScene from "@/types/scene";
import { SpeakerType } from "@/types/speaker";
import { getSpeakerColor } from "@/data/speakerColor";

export function Scene({
  scene,
  onChangeScene,
}: {
  scene: IScene;
  onChangeScene?: (delta: number) => void;
}) {
  const isImagePath = scene.background.includes("/");
  const hasButtons: boolean = !!scene.buttons || !!scene.exploreButton;
  const backgroundMusicAudioRef = useRef<HTMLAudioElement | null>(null);
  const soundEffectRef = useRef<HTMLAudioElement | null>(null);

  const fadeOutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const audioElement = backgroundMusicAudioRef.current;

    if (audioElement) {
      // 停掉上一次的 fade out（如果有的話）
      if (fadeOutRef.current) {
        clearInterval(fadeOutRef.current);
        fadeOutRef.current = null;
      }

      if (scene.backgroundMusic && scene.backgroundMusic !== "stop") {
        // 播放新音樂（立即切換）
        audioElement.pause(); // 停掉正在播放的音樂
        audioElement.currentTime = 0;
        audioElement.src = scene.backgroundMusic;
        audioElement.volume = 1;
        audioElement.play();
      } else if (scene.backgroundMusic === "stop") {
        // 淡出並停止
        fadeOutRef.current = setInterval(() => {
          if (audioElement.volume > 0.1) {
            audioElement.volume = Math.max(0, audioElement.volume - 0.1);
          } else {
            audioElement.pause();
            audioElement.currentTime = 0;
            clearInterval(fadeOutRef.current!);
            fadeOutRef.current = null;
          }
        }, 300);
      }
    }

    const soundEffectElement = soundEffectRef.current;

    if (
      soundEffectElement &&
      scene.soundEffect &&
      scene.soundEffect.includes("/")
    ) {
      // 播放音效（每次都播）
      soundEffectElement.src = scene.soundEffect;
      soundEffectElement.volume = 1;
      soundEffectElement.play().catch((err) => {
        console.error("Error playing sound effect:", err);
      });
    }

    // return 清理函數這邊不需要多餘處理，因為 fadeOutRef 已經用 useRef 管了
  }, [scene.backgroundMusic, scene.soundEffect]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className="relative w-full h-full overflow-hidden select-none whitespace-pre-line cursor-default text-base sm:text-lg md:text-lg lg:text-xl 2xl:text-3xl"
      onClick={() => !hasButtons && onChangeScene?.(scene.jumpPage ?? 1)}
    >
      <AnimatePresence
        mode={scene.transition?.mode ? scene.transition.mode : "sync"}
      >
        <motion.div
          key={scene.background}
          animate={{ opacity: 1 }}
          className="absolute inset-0 w-full h-auto"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: scene.transition ? scene.transition.duration : 0.5,
          }}
        >
          {isImagePath ? (
            <Image
              fill
              priority
              alt="Background"
              className="object-cover"
              src={scene.background}
            />
          ) : (
            <div className={clsx("h-full w-full", scene.background)} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={backgroundMusicAudioRef} loop />
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={soundEffectRef} />

      {/* Foreground */}
      {scene.foreground && (
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            alt="Foreground"
            className="absolute left-0 bottom-0 translate-y-[30%] h-[50%] w-[30%]"
            height={600}
            layout="intrinsic"
            objectFit="contain"
            src={scene.foreground}
            width={600}
          />
        </motion.div>
      )}
      {scene.description && <Description content={scene.description} />}

      {scene.exploreButton && (
        <ExploreButton
          content={scene.exploreButton.content}
          position={scene.exploreButton.position}
          onClick={() => onChangeScene?.(scene.jumpPage ?? 1)}
        />
      )}

      {scene.buttons && (
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 flex flex-col space-y-8 w-[30%]">
          {scene.buttons.map(({ content, jumpPage }, index) => (
            <Button
              key={index}
              content={content}
              onClick={() => onChangeScene?.(jumpPage)}
            />
          ))}
        </div>
      )}
      {scene.conversation && (
        <Conversation
          content={scene.conversation.content}
          speaker={scene.conversation.speaker}
        />
      )}
    </div>
  );
}

function Conversation({
  speaker,
  content,
}: {
  speaker: SpeakerType;
  content: string;
}) {
  const displayedText = useTypewriterEffect(content, 30);
  const textColor = getSpeakerColor(speaker);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 h-1/6 flex flex-col backdrop-blur-md text-left leading-relaxed">
      <div className="relative left-[20%] top-[8%]">
        <h1 className={clsx("font-extrabold", textColor)}>{speaker}</h1>
        <Divider className="mt-1 mb-3 bg-gray-500" />
        <p className={clsx("font-bold", textColor)}>{displayedText}</p>
      </div>
    </div>
  );
}

function Description({ content }: { content: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center transform translate-y-[15%] leading-relaxed">
      <div
        className="bg-black bg-opacity-20 text-white p-8 rounded-full shadow-lg backdrop-blur-sm
        border border-white/30
        transition-shadow duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={content}
            animate={{ opacity: 1 }}
            className="text-center font-bold"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Button({
  content,
  onClick,
}: {
  content: string;
  onClick: () => void;
}) {
  return (
    <button
      className="bg-black bg-opacity-40 text-white px-4 py-2 rounded-full w-full backdrop-blur-md
        border border-white/30
        shadow-[0_0_15px_rgba(255,255,255,0.5)]
        hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
        hover:bg-gray-700
        transition-all duration-300"
      onClick={onClick}
    >
      <p className="text-left px-4 font-bold">{content}</p>
    </button>
  );
}

function ExploreButton({
  content,
  position,
  onClick,
}: {
  content: string;
  position: { x: number; y: number };
  onClick: () => void;
}) {
  return (
    <button
      className="absolute text-white px-4 py-2 rounded-full backdrop-blur-sm bg-black bg-opacity-40
  border-4 border-double aspect-square
  hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
  transition-shadow duration-300
  leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
      style={{
        width: "10%",
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      <p className="text-center">{content}</p>
    </button>
  );
}
