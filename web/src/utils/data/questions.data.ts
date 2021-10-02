import { IQuestion } from "../types/Question";

export const questions: IQuestion[] = [
  {
    text: "Do you have any of the following conditions?",
    answers: [
      {
        text: "Type 1 Diabetes",
        description: "Generally, OpenCC focuses more on managing type 1 diabetes.",
      },
      {
        text: "Hypothyroidism",
        description:
          "OpenCC Provides all necessary features to help you manage Hypothyroidism!",
      },
      {
        text: "Eating Disorder",
        description:
          "Even though poor nutrition does not count as a chronic condition but OpenCC provides you with helpers tools to eat well.",
      },
      {
        text: "Mental Chronic conditions",
        description:
          "Anxiety disorders, Depression, Bipolar affective disorder, Behavioural and emotional disorders ...",
      },
      {
        text: "Nothing of the above",
        description:
          "You know someone with one of these conditions or you're just curious. We need you too!",
      },
    ],
  },
  {
    text: "Do you take any medications regularly?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      }
    ]
  },
  {
    text: "Do you have struggles keeping you meals scheduled ?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      }
    ]
  },
  {
    text: "Do you eat healthy ?",
    answers: [
      {
        text: "Yes, all the time",
      },
      {
        text: "Yes, sometimes",
      },
      {
        text: "No",
      }
    ]
  },
  {
    text: "Did you use any other apps like OpenCC before?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "No",
      }
    ]
  },
  {
    text: "Does OpenCC seem helpful to you or to someone you know?",
    answers: [
      {
        text: "Yes",
      },
      {
        text: "Not really",
      }
    ]
  }
];
