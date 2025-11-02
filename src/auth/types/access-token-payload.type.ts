export interface AccessTokenPayload {
  sub: string; // user.id (string olarak)
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  roleName: string; // kullanıcının rol adı
  roleId: string; // kullanıcının rolü
  departmentName: string; // kullanıcının bağlı olduğu departman adı
  departmentId: string; // kullanıcının bağlı olduğu departman
  isSystem: boolean; // sistem kullanıcısı mı
}