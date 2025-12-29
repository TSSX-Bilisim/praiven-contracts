export interface DepartmentUpdatedEvent {
  timestamp: number;

  departmentId: string;
  description: string;
  name: string;
}
