import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRotaryYears(startYear: number): string[] {
  const today = new Date();

  // Rotary year starts on July 1
  const currentRotaryStartYear =
    today.getMonth() >= 6
      ? today.getFullYear()
      : today.getFullYear() - 1;

  const years: string[] = [];

  for (let year = startYear; year <= currentRotaryStartYear; year++) {
    years.push(`${year}-${year + 1}`);
  }

  return years;
}

export const ROTARY_START_YEAR = 2024;