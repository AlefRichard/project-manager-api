import { Project } from '../../projects/entities/projects.entity';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  projects: Project[];
}
