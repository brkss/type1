export interface IQuestion {
  text: string;
  answers: IAnswer[];
}

interface IAnswer {
  text: string;
  description?: string;
}
