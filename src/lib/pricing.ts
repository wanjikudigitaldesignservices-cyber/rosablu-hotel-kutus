// ============================================================
// RosaBlu Hotel Kutus — Pricing Utility
// All values calculated and displayed to exactly 4 decimal places
// ============================================================

import { PricingBreakdown } from '@/types';

const VAT_RATE = 16.0000;
const SERVICE_CHARGE_RATE = 2.0000;

/**
 * Round a number to exactly 4 decimal places
 */
export function toFourDecimals(value: number): number {
  return Math.round(value * 10000) / 10000;
}

/**
 * Format a number to exactly 4 decimal places as string
 */
export function formatPrice(value: number): string {
  return value.toFixed(4);
}

/**
 * Format a price with currency prefix
 */
export function formatKsh(value: number): string {
  return `Ksh ${formatPrice(value)}`;
}

/**
 * Calculate the number of nights between two dates
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(diffDays, 0);
}

/**
 * Calculate full pricing breakdown to 4 decimal places
 */
export function calculatePricing(
  basePrice: number,
  numNights: number
): PricingBreakdown {
  const subtotal = toFourDecimals(basePrice * numNights);
  const vatRate = toFourDecimals(VAT_RATE);
  const vatAmount = toFourDecimals(subtotal * (vatRate / 100));
  const serviceCharge = toFourDecimals(subtotal * (SERVICE_CHARGE_RATE / 100));
  const totalPrice = toFourDecimals(subtotal + vatAmount + serviceCharge);

  return {
    basePrice: toFourDecimals(basePrice),
    numNights,
    subtotal,
    vatRate,
    vatAmount,
    serviceCharge,
    totalPrice,
  };
}

/**
 * Format a date for display
 */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-KE', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayString(): string {
  return new Date().toISOString().split('T')[0];
}

/**
 * Get tomorrow's date in YYYY-MM-DD format
 */
export function getTomorrowString(): string {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
}
