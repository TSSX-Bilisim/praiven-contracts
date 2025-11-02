import { R as RequestUser } from '../request-user.type-CsGP6svh.js';

interface FilterMessageJob {
    conversationId: string;
    messageId: string;
    content: string;
    userId: string;
    userPayload: RequestUser;
    modelId: string;
}

declare enum JobNames {
    FILTER_MESSAGE = "filter-message"
}

declare enum QueueNames {
    FILTER_QUEUE = "filter-queue"
}

export { type FilterMessageJob, JobNames, QueueNames };
