import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStudent?: Maybe<Student>;
  deleteStudent?: Maybe<Student>;
  updateStudent?: Maybe<Student>;
};


export type MutationAddStudentArgs = {
  firstName: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteStudentArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateStudentArgs = {
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  students?: Maybe<Array<Maybe<Student>>>;
};

export type Student = {
  __typename?: 'Student';
  firstName: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  linkedinUrl?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
};

export type GetStudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students?: Array<{ __typename?: 'Student', id: number, firstName: string, lastName: string, role?: string | null | undefined, imageUrl?: string | null | undefined, linkedinUrl?: string | null | undefined, twitterUrl?: string | null | undefined } | null | undefined> | null | undefined };

export type DeleteStudentMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteStudentMutation = { __typename?: 'Mutation', deleteStudent?: { __typename?: 'Student', id: number } | null | undefined };

export type AddStudentMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  id: Scalars['Int'];
  role?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
}>;


export type AddStudentMutation = { __typename?: 'Mutation', addStudent?: { __typename?: 'Student', firstName: string, lastName: string, role?: string | null | undefined, id: number, imageUrl?: string | null | undefined, twitterUrl?: string | null | undefined, linkedinUrl?: string | null | undefined } | null | undefined };

export type UpdateStudentMutationVariables = Exact<{
  id?: InputMaybe<Scalars['Int']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  twitterUrl?: InputMaybe<Scalars['String']>;
}>;


export type UpdateStudentMutation = { __typename?: 'Mutation', updateStudent?: { __typename?: 'Student', firstName: string, lastName: string, role?: string | null | undefined, id: number, imageUrl?: string | null | undefined, twitterUrl?: string | null | undefined, linkedinUrl?: string | null | undefined } | null | undefined };


export const GetStudentsDocument = gql`
    query GetStudents {
  students {
    id
    firstName
    lastName
    role
    imageUrl
    linkedinUrl
    twitterUrl
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const DeleteStudentDocument = gql`
    mutation DeleteStudent($id: Int!) {
  deleteStudent(id: $id) {
    id
  }
}
    `;
export type DeleteStudentMutationFn = Apollo.MutationFunction<DeleteStudentMutation, DeleteStudentMutationVariables>;

/**
 * __useDeleteStudentMutation__
 *
 * To run a mutation, you first call `useDeleteStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStudentMutation, { data, loading, error }] = useDeleteStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStudentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStudentMutation, DeleteStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStudentMutation, DeleteStudentMutationVariables>(DeleteStudentDocument, options);
      }
export type DeleteStudentMutationHookResult = ReturnType<typeof useDeleteStudentMutation>;
export type DeleteStudentMutationResult = Apollo.MutationResult<DeleteStudentMutation>;
export type DeleteStudentMutationOptions = Apollo.BaseMutationOptions<DeleteStudentMutation, DeleteStudentMutationVariables>;
export const AddStudentDocument = gql`
    mutation AddStudent($firstName: String!, $lastName: String!, $id: Int!, $role: String, $twitterUrl: String, $linkedinUrl: String, $imageUrl: String) {
  addStudent(
    firstName: $firstName
    lastName: $lastName
    role: $role
    id: $id
    imageUrl: $imageUrl
    twitterUrl: $twitterUrl
    linkedinUrl: $linkedinUrl
  ) {
    firstName
    lastName
    role
    id
    imageUrl
    twitterUrl
    linkedinUrl
  }
}
    `;
export type AddStudentMutationFn = Apollo.MutationFunction<AddStudentMutation, AddStudentMutationVariables>;

/**
 * __useAddStudentMutation__
 *
 * To run a mutation, you first call `useAddStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStudentMutation, { data, loading, error }] = useAddStudentMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      id: // value for 'id'
 *      role: // value for 'role'
 *      twitterUrl: // value for 'twitterUrl'
 *      linkedinUrl: // value for 'linkedinUrl'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useAddStudentMutation(baseOptions?: Apollo.MutationHookOptions<AddStudentMutation, AddStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStudentMutation, AddStudentMutationVariables>(AddStudentDocument, options);
      }
export type AddStudentMutationHookResult = ReturnType<typeof useAddStudentMutation>;
export type AddStudentMutationResult = Apollo.MutationResult<AddStudentMutation>;
export type AddStudentMutationOptions = Apollo.BaseMutationOptions<AddStudentMutation, AddStudentMutationVariables>;
export const UpdateStudentDocument = gql`
    mutation UpdateStudent($id: Int, $firstName: String, $lastName: String, $role: String, $imageUrl: String, $linkedinUrl: String, $twitterUrl: String) {
  updateStudent(
    id: $id
    firstName: $firstName
    lastName: $lastName
    role: $role
    imageUrl: $imageUrl
    linkedinUrl: $linkedinUrl
    twitterUrl: $twitterUrl
  ) {
    firstName
    lastName
    role
    id
    imageUrl
    twitterUrl
    linkedinUrl
  }
}
    `;
export type UpdateStudentMutationFn = Apollo.MutationFunction<UpdateStudentMutation, UpdateStudentMutationVariables>;

/**
 * __useUpdateStudentMutation__
 *
 * To run a mutation, you first call `useUpdateStudentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStudentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStudentMutation, { data, loading, error }] = useUpdateStudentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      role: // value for 'role'
 *      imageUrl: // value for 'imageUrl'
 *      linkedinUrl: // value for 'linkedinUrl'
 *      twitterUrl: // value for 'twitterUrl'
 *   },
 * });
 */
export function useUpdateStudentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStudentMutation, UpdateStudentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStudentMutation, UpdateStudentMutationVariables>(UpdateStudentDocument, options);
      }
export type UpdateStudentMutationHookResult = ReturnType<typeof useUpdateStudentMutation>;
export type UpdateStudentMutationResult = Apollo.MutationResult<UpdateStudentMutation>;
export type UpdateStudentMutationOptions = Apollo.BaseMutationOptions<UpdateStudentMutation, UpdateStudentMutationVariables>;