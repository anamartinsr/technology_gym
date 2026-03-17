export const scheduleSlots = [
  { day: "Segunda - Sexta", time: "05:00 / 00:00" },
  { day: "Sábado", time: "05:00 / 15:00" },
  { day: "Domingo e Feriados", time: "05:00 / 14:00" },
] as const;

export type ScheduleSlot = (typeof scheduleSlots)[number];
