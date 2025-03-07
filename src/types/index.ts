export type MeditationSession = {
  id: string;
  duration: number; // duration in minutes
  date: Date;
  notes?: string;
};

export interface User {
  id: string;
  name: string;
  email: string;
  meditationSessions: MeditationSession[];
}