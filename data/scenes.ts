import IScene from "@/types/scene";

export const scenes: IScene[] = [
  {
    background: "/images/列車/abandoned train.jpg",
    soundEffect: "輕快音樂",
    foreground: "/images/character.png",
    description: "我只是一個敘述\n這是第二行",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這一定是夢……", jumpPage: 1 },
    ],
    conversation: "我：「辛苦了一個禮拜，好不容易休息了…」",
  },
];
