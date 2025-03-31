export default interface IScene {
  background: string;
  foreground?: string;
  conversation?: string;
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
