import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Answer = {
  __typename?: 'Answer';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  question: Question;
  text: Scalars['String'];
};

export type CreateAbandonedInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRequestInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  questions: Array<InQuestion>;
};

export type DefaultAuthResponse = {
  __typename?: 'DefaultAuthResponse';
  message?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type DefaultInviteResponse = {
  __typename?: 'DefaultInviteResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type InAnswer = {
  text: Scalars['String'];
};

export type InQuestion = {
  answers: Array<InAnswer>;
  text: Scalars['String'];
};

export type LoginUserInput = {
  ident: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbandoned: DefaultInviteResponse;
  createRequest: DefaultInviteResponse;
  login: DefaultAuthResponse;
  refreshToken: DefaultAuthResponse;
  register: DefaultAuthResponse;
  revokeToken: Scalars['Boolean'];
};


export type MutationCreateAbandonedArgs = {
  data: CreateAbandonedInput;
};


export type MutationCreateRequestArgs = {
  data: CreateRequestInput;
};


export type MutationLoginArgs = {
  data: LoginUserInput;
};


export type MutationRefreshTokenArgs = {
  refresh_token: Scalars['String'];
};


export type MutationRegisterArgs = {
  data: RegisterUserInput;
};


export type MutationRevokeTokenArgs = {
  uid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  invite: Scalars['String'];
  ping: Scalars['String'];
  requests: Array<Request>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  request: Request;
  text: Scalars['String'];
};

export type RegisterUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type Request = {
  __typename?: 'Request';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  tokenVersion: Scalars['Float'];
  username: Scalars['String'];
};

export type CreateAbandonedRecordMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateAbandonedRecordMutation = { __typename?: 'Mutation', createAbandoned: { __typename?: 'DefaultInviteResponse', status: boolean, message?: string | null | undefined } };

export type CreateRequestRecordMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  questions: Array<InQuestion> | InQuestion;
}>;


export type CreateRequestRecordMutation = { __typename?: 'Mutation', createRequest: { __typename?: 'DefaultInviteResponse', status: boolean, message?: string | null | undefined } };


export const CreateAbandonedRecordDocument = gql`
    mutation CreateAbandonedRecord($name: String!, $email: String!) {
  createAbandoned(data: {name: $name, email: $email}) {
    status
    message
  }
}
    `;
export type CreateAbandonedRecordMutationFn = Apollo.MutationFunction<CreateAbandonedRecordMutation, CreateAbandonedRecordMutationVariables>;

/**
 * __useCreateAbandonedRecordMutation__
 *
 * To run a mutation, you first call `useCreateAbandonedRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAbandonedRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAbandonedRecordMutation, { data, loading, error }] = useCreateAbandonedRecordMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateAbandonedRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateAbandonedRecordMutation, CreateAbandonedRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAbandonedRecordMutation, CreateAbandonedRecordMutationVariables>(CreateAbandonedRecordDocument, options);
      }
export type CreateAbandonedRecordMutationHookResult = ReturnType<typeof useCreateAbandonedRecordMutation>;
export type CreateAbandonedRecordMutationResult = Apollo.MutationResult<CreateAbandonedRecordMutation>;
export type CreateAbandonedRecordMutationOptions = Apollo.BaseMutationOptions<CreateAbandonedRecordMutation, CreateAbandonedRecordMutationVariables>;
export const CreateRequestRecordDocument = gql`
    mutation CreateRequestRecord($name: String!, $email: String!, $questions: [InQuestion!]!) {
  createRequest(data: {name: $name, email: $email, questions: $questions}) {
    status
    message
  }
}
    `;
export type CreateRequestRecordMutationFn = Apollo.MutationFunction<CreateRequestRecordMutation, CreateRequestRecordMutationVariables>;

/**
 * __useCreateRequestRecordMutation__
 *
 * To run a mutation, you first call `useCreateRequestRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRequestRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRequestRecordMutation, { data, loading, error }] = useCreateRequestRecordMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      questions: // value for 'questions'
 *   },
 * });
 */
export function useCreateRequestRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateRequestRecordMutation, CreateRequestRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRequestRecordMutation, CreateRequestRecordMutationVariables>(CreateRequestRecordDocument, options);
      }
export type CreateRequestRecordMutationHookResult = ReturnType<typeof useCreateRequestRecordMutation>;
export type CreateRequestRecordMutationResult = Apollo.MutationResult<CreateRequestRecordMutation>;
export type CreateRequestRecordMutationOptions = Apollo.BaseMutationOptions<CreateRequestRecordMutation, CreateRequestRecordMutationVariables>;