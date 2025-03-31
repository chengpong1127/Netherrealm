import IScene from "@/types/scene";

export const scenes: IScene[] = [
  {
    background: "/images/列車/abandoned train.jpg",
    soundEffect: "輕快音樂",
  },
  {
    background: "/images/列車/abandoned train.jpg",
    conversation: "我：「辛苦了一個禮拜，好不容易休息了…」",
    soundEffect: "輕快音樂",
    description: "我只是一個敘述",
  },
  {
    background: "/images/列車/abandoned train.jpg",
    description: "我只是一個敘述",
  },
  {
    background: "/images/列車/abandoned train.jpg",
    buttons: [
      { content: "我準備好了。", jumpPage: 1 },
      { content: "這一定是夢……", jumpPage: 1 },
    ],
    description: "我只是一個敘述",
  },
];
