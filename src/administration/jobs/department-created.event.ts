export interface DepartmentCreatedEvent {
  timestamp: number;

  departmentId: string;
  description: string;
  name: string;
  key: string;
}
