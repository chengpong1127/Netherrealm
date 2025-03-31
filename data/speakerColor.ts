import { SpeakerType } from "@/types/speaker";

const DEFAULT_COLOR = "text-gray-400";

const specificColors: Partial<Record<SpeakerType, string>> = {
  [SpeakerType.PLAYER]: "text-white",
  [SpeakerType.XI]: "text-cyan-200",
};

export function getSpeakerColor(speaker: SpeakerType): string {
  return specificColors[speaker] || DEFAULT_COLOR;
}
