export const INTERNAL_ROLES = {
  SUPER_ADMIN: {
    id: 'role_superadmin_001',
    key: 'SUPER_ADMIN',
    name: 'Super Administrator',
    description: 'Full access to all system settings and management',
  },
  ADMIN: {
    id: 'role_admin_002',
    key: 'ADMIN',
    name: 'Administrator',
    description: 'Department-based management and configuration privileges',
  },
  MANAGER: {
    id: 'role_manager_003',
    key: 'MANAGER',
    name: 'Manager',
    description: 'Team metrics and reporting access',
  },
  USER: {
    id: 'role_user_004',
    key: 'USER',
    name: 'User',
    description: 'Basic LLM usage privileges',
  },
} as const;

export type RoleKey = keyof typeof INTERNAL_ROLES;
export type RoleDefinition = typeof INTERNAL_ROLES[RoleKey];
export type RoleId = RoleDefinition['id'];

// Helper functions
export const getRoleById = (id: string) => {
  return Object.values(INTERNAL_ROLES).find(role => role.id === id);
};

export const getRoleByKey = (key: string) => {
  return INTERNAL_ROLES[key as RoleKey];
};

export const getAllRoles = () => {
  return Object.values(INTERNAL_ROLES);
};