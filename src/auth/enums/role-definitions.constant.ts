export const INTERNAL_ROLES = {
  SUPER_ADMIN: {
    id: 'role_superadmin_001',
    key: 'SUPER_ADMIN',
    name: 'Süper Yönetici',
    description: 'Tüm sistem ayarlarına ve yönetimine tam erişim',
  },
  ADMIN: {
    id: 'role_admin_002',
    key: 'ADMIN',
    name: 'Yönetici',
    description: 'Departman bazlı yönetim ve konfigürasyon yetkileri',
  },
  MANAGER: {
    id: 'role_manager_003',
    key: 'MANAGER',
    name: 'Müdür',
    description: 'Takım metrikleri ve raporlama erişimi',
  },
  USER: {
    id: 'role_user_004',
    key: 'USER',
    name: 'Kullanıcı',
    description: 'Temel LLM kullanım yetkileri',
  },
} as const;

export type RoleKey = keyof typeof ROLE_DEFINITIONS;
export type RoleDefinition = typeof ROLE_DEFINITIONS[RoleKey];
export type RoleId = RoleDefinition['id'];

// Helper functions
export const getRoleById = (id: string) => {
  return Object.values(ROLE_DEFINITIONS).find(role => role.id === id);
};

export const getRoleByKey = (key: string) => {
  return ROLE_DEFINITIONS[key as RoleKey];
};

export const getAllRoles = () => {
  return Object.values(ROLE_DEFINITIONS);
};