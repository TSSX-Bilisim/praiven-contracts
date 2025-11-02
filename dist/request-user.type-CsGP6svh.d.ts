declare enum RequestUserRole {
    ADMIN = "ADMIN",
    USER = "USER",
    SYSTEM = "SYSTEM"
}

interface RequestUser {
    userId: string;
    role: RequestUserRole;
    isSystem: boolean;
}

export { type RequestUser as R, RequestUserRole as a };
