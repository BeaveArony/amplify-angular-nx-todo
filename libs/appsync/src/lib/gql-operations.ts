import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      __typename
      id
      name
      completed
      createdOnClientAt
    }
  }
`;

export const LIST_TODOS = gql`
  query ListTodos($filter: ModelTodoFilterInput, $nextToken: String) {
    listTodos(filter: $filter, limit: 999, nextToken: $nextToken) {
      __typename
      items {
        __typename
        id
        name
        completed
        createdOnClientAt
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      __typename
      id
      name
      completed
      createdOnClientAt
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      __typename
      id
    }
  }
`;
