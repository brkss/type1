import { IQuestion } from "../types/Question";

export const questions: IQuestion[] = [
  {
    text: "Do you hove any of the following conditions ?",
    answers: [
      {
        text: "Type 1 Diabetes",
        description: "Generally OpenCC focus more on managing type 1 diabetes.",
      },
      {
        text: "Hypothyroidism",
        description:
          "OpenCC Provide all necessary features to help you manage Hypothyroidism!",
      },
      {
        text: "Eating Disorder",
        description:
          "Even tho poor nutrition doesnt count as chrinic condition but OpenCC provide you with helpers tools to eat well.",
      },
      {
        text: "Mental Chronic",
        description:
          "Anxiety disorders, Depression, Bipolar affective disorder, Behavioural and emotional disorders ...",
      },
      {
        text: "Nothing of the above",
        description:
          "You know someone with one these condition or you're just curious.",
      },
    ],
  },
];
