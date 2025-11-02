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

interface AccessTokenPayload {
    sub: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: RequestUserRole;
    isSystem: boolean;
}

interface RefreshTokenPayload {
    sub: string;
    jti: string;
}

declare enum JobNames {
    FILTER_MESSAGE = "filter-message"
}

declare enum QueueNames {
    FILTER_QUEUE = "filter-queue"
}

interface FilterMessageJob {
    conversationId: string;
    messageId: string;
    content: string;
    userId: string;
    userPayload: RequestUser;
    modelId: string;
}

export { type AccessTokenPayload, type FilterMessageJob, JobNames, QueueNames, type RefreshTokenPayload, type RequestUser, RequestUserRole };
