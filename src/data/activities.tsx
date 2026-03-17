import { imageAssets } from "@/data/images";

export const activities = [
  { image: imageAssets.activities.zumba, value: "Zumba" },
  { image: imageAssets.activities.crossfit, value: "Crossfit" },
  { image: imageAssets.activities.yoga, value: "Yoga" },
  { image: imageAssets.activities.weigths, value: "Musculação" },
  { image: imageAssets.activities.swimming, value: "Natação" },
  { value: "Sauna" },
  { value: "Spinning" },
  { value: "Pilates" },
] as const;

export type Activity = (typeof activities)[number];
