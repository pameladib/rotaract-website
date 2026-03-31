import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRotaryYears(startYear: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const year = startYear + i;
    return `${year}-${year + 1}`;
  });
}

export const ROTARY_START_YEAR = 2024;
export const ROTARY_YEAR_COUNT = 6;