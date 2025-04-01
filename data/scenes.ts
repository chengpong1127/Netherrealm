import IScene from "@/types/scene";
import { SpeakerType } from "@/types/speaker";

export const scenes: IScene[] = [
  {
    background: "/images/列車/abandoned train.jpg",
    soundEffect: "輕快音樂",
    foreground: "/images/character.png",
    description: "我只是一個敘述\n這是第二行",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這一定是夢……", jumpPage: 2 },
    ],
    conversation: {
      speaker: SpeakerType.XI,
      content: "辛苦了一個禮拜，好不容易休息了…",
    },
    exploreButton: {
      content: "我是",
      position: {
        x: 200,
        y: 800,
      },
    },
  },
  {
    background: "bg-gray-500",
    description: "我是第二頁",
    jumpPage: 2,
  },
  {
    background: "bg-green-300",
    description: "我是第三頁",
    jumpPage: 1,
  },
  {
    background: "bg-yellow-400",
    description: "我是第四頁",
  },
];
