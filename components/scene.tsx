import Image from "next/image";
import clsx from "clsx";

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
    <div
      className="relative w-full h-full"
      role="button"
      tabIndex={0}
      onClick={() => onChangeScene?.(1)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
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
          className="absolute left-0 bottom-0 translate-y-1/4 z-10"
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
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 h-1/6 flex items-center justify-center backdrop-blur-md">
      <p className={clsx("text-2xl text-center font-bold", textColor)}>
        {displayedText}
      </p>
    </div>
  );
}

function Description({ content }: { content: string }) {
  const displayedText = useTypewriterEffect(content);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-20 text-white p-8 rounded-full shadow-lg transform translate-y-64 backdrop-blur-sm">
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
      className="bg-black bg-opacity-40 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-md w-full backdrop-blur-md"
      onClick={onClick}
    >
      <p className="text-2xl text-left px-4 font-bold">{content}</p>
    </button>
  );
}
