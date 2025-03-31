import IScene from "@/types/scene";
import { SpeakerType } from "@/types/speaker";

export const scenes: IScene[] = [
  {
    background: "bg-green-500",
    soundEffect: "輕快音樂",
    foreground: "/images/character.png",
    description: "我只是一個敘述\n這是第二行",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這一定是夢……", jumpPage: 1 },
    ],
    conversation: {
      speaker: SpeakerType.XI,
      content: "辛苦了一個禮拜，好不容易休息了…",
    },
    exploreButton: {
      content: "我是",
      position: {
        x: 500,
        y: 500,
      },
    },
  },
];
