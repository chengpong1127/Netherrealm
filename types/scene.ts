import { SpeakerType } from "./speaker";
export default interface IScene {
  background: string;
  backgroundMusic?: string;
  foreground?: string;
  transition?: {
    duration: number;
    mode?: "sync" | "wait";
  };
  conversation?: {
    speaker: SpeakerType;
    content: string;
  };
  description?: string;
  soundEffect?: string;
  buttons?: {
    content: string;
    jumpPage: number;
  }[];
  exploreButton?: {
    content: string;
    position: { x: number; y: number };
  };
  jumpPage?: number;
}
