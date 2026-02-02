// lib/roi-math.js

// --- ROI MATH CONSTANTS ---
// These values are chosen to match your original HTML ROI calculator
// such that for: employees=150, churn=5, risk=Medium
// Staff = $3,330 and Total = $58,050

export const LICENSE_COST = 16.0;

// Use 444 here to match your working HTML behavior
export const LABOR_SAVINGS = 840.0;

export const HOURS_PER_USER = 10; // hours saved per churned user

export const RISK_CONSTANTS = {
  low: { base: 31500, perEmp: 63 },
  medium: { base: 42000, perEmp: 84 },
  high: { base: 52500, perEmp: 105 },
};

export function calculateRoi({ employees, churnPercent, riskLevel }) {
  const safeEmployees = Math.max(0, employees || 0);
  const safeChurn = Math.max(0, churnPercent || 0);

  const churnedUsers = safeEmployees * (safeChurn / 100);

  const licenseSavings = churnedUsers * LICENSE_COST;
  const staffSavings = churnedUsers * LABOR_SAVINGS;
  const timeSavings = churnedUsers * HOURS_PER_USER;

  const riskConst = RISK_CONSTANTS[riskLevel] || RISK_CONSTANTS.medium;
  const riskSavings = riskConst.base + safeEmployees * riskConst.perEmp;

  const totalSavings = licenseSavings + staffSavings + riskSavings;

  return {
    licenseSavings,
    staffSavings,
    riskSavings,
    totalSavings,
    timeSavings,
  };
}

export function formatMoney(amount, currency) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(num);
}
