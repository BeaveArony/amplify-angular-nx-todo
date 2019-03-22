import { OperationVariables } from 'apollo-client';
import {
  buildMutation,
  CacheOperationTypes,
  CacheUpdatesOptions,
  VariablesInfo
} from 'aws-appsync';
import { DocumentNode } from 'graphql';
import { AppSyncClient } from './appsync.module';

export interface TypeNameMutationType {
  __typename: string;
}

export interface GraphqlMutationInput<T, R extends TypeNameMutationType> {
  /** DocumentNode for the mutation */
  mutation: DocumentNode;
  /** An object with the mutation variables */
  variablesInfo: T | VariablesInfo<T>;
  /** The queries to update in the cache */
  cacheUpdateQuery: CacheUpdatesOptions;
  /** __typename from your schema */
  typename: R['__typename'];
  /** The name of the field with the ID (optional) */
  idField?: string;
  /** Override for the operation type (optional) */
  operationType?: CacheOperationTypes;
}

/**
 * Builds a MutationOptions object ready to be used by the ApolloClient to automatically update the cache according to the cacheUpdateQuery
 * parameter
 */
export function graphqlMutation<
  T = OperationVariables,
  R extends TypeNameMutationType = TypeNameMutationType
>({
  mutation,
  variablesInfo,
  cacheUpdateQuery,
  typename,
  idField,
  operationType
}: GraphqlMutationInput<T, R>) {
  return buildMutation<T>(
    AppSyncClient,
    mutation,
    variablesInfo,
    cacheUpdateQuery,
    typename,
    idField,
    operationType
  );
}

export function executeMutation<
  T = OperationVariables,
  R extends TypeNameMutationType = TypeNameMutationType
>(mutationInput: GraphqlMutationInput<T, R>) {
  return AppSyncClient.mutate(graphqlMutation<T, R>(mutationInput));
}
