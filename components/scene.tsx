import Image from "next/image";

import IScene from "@/types/scene";

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
          className="relative z-10 w-full h-auto"
          layout="intrinsic"
          objectFit="contain"
          src={scene.foreground}
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
      {scene.conversation && <Conversation content={scene.conversation} />}
    </div>
  );
}

function Conversation({ content }: { content: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white h-1/6 flex items-center justify-center">
      <p className="text-2xl text-center">{content}</p>
    </div>
  );
}

function Description({ content }: { content: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-black bg-opacity-30 text-white p-4 rounded-lg shadow-lg transform translate-y-64">
        <p className="text-xl text-center">{content}</p>
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
      className="bg-black bg-opacity-40 hover:bg-gray-700 text-white px-4 py-2 rounded-full shadow-md w-full"
      onClick={onClick}
    >
      <p className="text-lg text-left px-4">{content}</p>
    </button>
  );
}
