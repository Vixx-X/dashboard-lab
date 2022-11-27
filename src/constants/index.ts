export const Departament = {
  NONE: 0,
  MARKETING: 1 << 0,
  HUMAN_RESOURCES: 1 << 1,
  BUSINESS_DEVELOPER: 1 << 2,
  OPERATION_MANAGMENT: 1 << 3,
  ALL: ~(~0 << 4),
} as const;
