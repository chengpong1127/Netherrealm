import Image from "next/image";
import clsx from "clsx";
import { Divider } from "@heroui/divider";
import { motion, AnimatePresence } from "framer-motion"; // Add AnimatePresence import

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

  return (
    <button
      className="relative w-full h-full overflow-hidden select-none whitespace-pre-line cursor-default text-medium"
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
              alt="Background"
              layout="fill"
              objectFit="cover"
              src={scene.background}
            />
          ) : (
            <div className={clsx("h-full w-full", scene.background)} />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Foreground */}
      {scene.foreground && (
        <Image
          alt="Foreground"
          className="absolute left-0 bottom-0 translate-y-1/4"
          height={600}
          layout="intrinsic"
          objectFit="contain"
          src={scene.foreground}
          width={600}
        />
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
    </button>
  );
}

function Conversation({
  speaker,
  content,
}: {
  speaker: SpeakerType;
  content: string;
}) {
  const displayedText = useTypewriterEffect(content);
  const textColor = getSpeakerColor(speaker);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 h-1/6 flex flex-col backdrop-blur-md text-left">
      <div className="relative left-[20%] top-[8%]">
        <h1 className={clsx("font-extrabold", textColor)}>{speaker}</h1>
        <Divider className="mt-1 mb-3 bg-gray-500" />
        <p className={clsx("font-bold", textColor)}>{displayedText}</p>
      </div>
    </div>
  );
}

function Description({ content }: { content: string }) {
  const displayedText = useTypewriterEffect(content);

  return (
    <div className="absolute inset-0 flex items-center justify-center transform translate-y-[15%]">
      <div
        className="bg-black bg-opacity-20 text-white p-8 rounded-full shadow-lg backdrop-blur-sm
        border border-white/30
        transition-shadow duration-300"
      >
        <p className="text-center font-bold">{displayedText}</p>
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
      border-4 border-double h-32 w-32
      hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
      transition-all duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      <p className="text-center">{content}</p>
    </button>
  );
}
