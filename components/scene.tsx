import Image from "next/image";
import clsx from "clsx";
import { Divider } from "@heroui/divider";

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
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="relative w-full h-full overflow-hidden"
      onClick={() => !scene.buttons && onChangeScene?.(1)}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !scene.buttons) {
          onChangeScene?.(1);
        }
      }}
    >
      {/* Background */}
      <Image
        alt="Background"
        className="absolute inset-0 w-full h-auto"
        layout="fill"
        objectFit="cover"
        src={scene.background}
      />

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

      {/* Buttons */}
      {scene.buttons && (
        <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 flex flex-col space-y-8 w-1/5">
          {scene.buttons.map(({ content, jumpPage }, index) => (
            <Button
              key={index}
              content={content}
              onClick={() => onChangeScene?.(jumpPage)}
            />
          ))}
        </div>
      )}

      {scene.exploreButton && (
        <ExploreButton
          content={scene.exploreButton.content}
          position={scene.exploreButton.position}
          onClick={() => onChangeScene?.(scene.jumpPage ?? 1)}
        />
      )}

      {scene.description && <Description content={scene.description} />}
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
  const displayedText = useTypewriterEffect(content);
  const textColor = getSpeakerColor(speaker);

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 h-1/6 flex flex-col backdrop-blur-md">
      <div className="relative left-80 top-10">
        <h1 className={clsx("text-2xl font-extrabold", textColor)}>
          {speaker}
        </h1>
        <Divider className="mt-2 mb-5 bg-gray-500" />
        <p
          className={clsx(
            "text-2xl text-left font-bold whitespace-pre-line",
            textColor,
          )}
        >
          {displayedText}
        </p>
      </div>
    </div>
  );
}

function Description({ content }: { content: string }) {
  const displayedText = useTypewriterEffect(content);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="bg-black bg-opacity-20 text-white p-8 rounded-full shadow-lg transform translate-y-64 backdrop-blur-sm
        border border-white/30
        hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]
        transition-shadow duration-300"
      >
        <p className="text-2xl text-center font-bold whitespace-pre-line">
          {displayedText}
        </p>
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
      <p className="text-2xl text-left px-4 font-bold">{content}</p>
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
      className="absolute text-white px-4 py-2 rounded-full backdrop-blur-sm
        border-4  border-double h-32 w-32"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
      onClick={onClick}
    >
      <p className="text-lg text-center">{content}</p>
    </button>
  );
}
