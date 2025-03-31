export default interface IScene {
  background: string;
  foreground?: string;
  conversation?: string;
  description?: string;
  soundEffect?: string;
  button?: {
    description: string;
    jumpPage: number;
  };
}
