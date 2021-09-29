export interface Question {
  text: string;
  answers: Answer[];
}

interface Answer {
  text: string;
  description?: string;
}
