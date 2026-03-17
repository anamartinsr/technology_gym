import { imageAssets } from "@/data/images";

export const units = [
  {
    name: "Unidade Centro",
    address: "Rua Exemplo, 123 - Centro",
    image: imageAssets.gymFacade,
  },

  {
    name: "Unidade Zona Sul",
    address: "Av. Modelo, 456 - Zona Sul",
    image: imageAssets.gymFacade,
  },

  {
    name: "Unidade Zona Norte",
    address: "Av. Modelo, 789 - Zona Norte",
    image: imageAssets.gymFacade,
  },
] as const;

export type Unit = (typeof units)[number];
