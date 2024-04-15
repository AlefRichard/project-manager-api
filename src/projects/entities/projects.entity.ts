import { Task } from '../../tasks/entities/task.entity';

export class Project {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  tasks: Task[];
}