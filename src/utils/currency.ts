// Exchange rate: 1 BGN = 0.51 EUR (approximately)
const BGN_TO_EUR_RATE = 0.51;

export function convertBgnToEur(amountInBgn: number): number {
  return Math.round(amountInBgn * BGN_TO_EUR_RATE * 100) / 100;
}

export function formatPrice(amountInBgn: number): string {
  const amountInEur = Math.round(amountInBgn * BGN_TO_EUR_RATE);
  return `${amountInBgn} лв. / ${amountInEur} €`;
}
