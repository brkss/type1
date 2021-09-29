export interface IQuestion {
  text: string;
  answers: IAnswer[];
}

export interface IAnswer {
  text: string;
  description?: string;
}
