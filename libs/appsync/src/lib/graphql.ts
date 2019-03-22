export type Maybe<T> = T | null;

export interface ModelTodoFilterInput {
  id?: Maybe<ModelIdFilterInput>;

  name?: Maybe<ModelStringFilterInput>;

  completed?: Maybe<ModelBooleanFilterInput>;

  createdOnClientAt?: Maybe<ModelStringFilterInput>;

  and?: Maybe<(Maybe<ModelTodoFilterInput>)[]>;

  or?: Maybe<(Maybe<ModelTodoFilterInput>)[]>;

  not?: Maybe<ModelTodoFilterInput>;
}

export interface ModelIdFilterInput {
  ne?: Maybe<string>;

  eq?: Maybe<string>;

  le?: Maybe<string>;

  lt?: Maybe<string>;

  ge?: Maybe<string>;

  gt?: Maybe<string>;

  contains?: Maybe<string>;

  notContains?: Maybe<string>;

  between?: Maybe<(Maybe<string>)[]>;

  beginsWith?: Maybe<string>;
}

export interface ModelStringFilterInput {
  ne?: Maybe<string>;

  eq?: Maybe<string>;

  le?: Maybe<string>;

  lt?: Maybe<string>;

  ge?: Maybe<string>;

  gt?: Maybe<string>;

  contains?: Maybe<string>;

  notContains?: Maybe<string>;

  between?: Maybe<(Maybe<string>)[]>;

  beginsWith?: Maybe<string>;
}

export interface ModelBooleanFilterInput {
  ne?: Maybe<boolean>;

  eq?: Maybe<boolean>;
}

export interface CreateTodoInput {
  id?: Maybe<string>;

  name: string;

  completed: boolean;

  createdOnClientAt: AwsDateTime;
}

export interface UpdateTodoInput {
  id: string;

  name?: Maybe<string>;

  completed?: Maybe<boolean>;

  createdOnClientAt?: Maybe<AwsDateTime>;
}

export interface DeleteTodoInput {
  id?: Maybe<string>;
}

export interface ModelFloatFilterInput {
  ne?: Maybe<number>;

  eq?: Maybe<number>;

  le?: Maybe<number>;

  lt?: Maybe<number>;

  ge?: Maybe<number>;

  gt?: Maybe<number>;

  contains?: Maybe<number>;

  notContains?: Maybe<number>;

  between?: Maybe<(Maybe<number>)[]>;
}

export interface ModelIntFilterInput {
  ne?: Maybe<number>;

  eq?: Maybe<number>;

  le?: Maybe<number>;

  lt?: Maybe<number>;

  ge?: Maybe<number>;

  gt?: Maybe<number>;

  contains?: Maybe<number>;

  notContains?: Maybe<number>;

  between?: Maybe<(Maybe<number>)[]>;
}

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** The `AWSDateTime` scalar type provided by AWS AppSync, represents a valid ***extended*** [ISO 8601 DateTime](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) string. In other words, this scalar type accepts datetime strings of the form `YYYY-MM-DDThh:mm:ss.SSSZ`.  The scalar can also accept "negative years" of the form `-YYYY` which correspond to years before `0000`. For example, "**-2017-01-01T00:00Z**" and "**-9999-01-01T00:00Z**" are both valid datetime strings.  The field after the two digit seconds field is a nanoseconds field. It can accept between 1 and 9 digits. So, for example, "**1970-01-01T12:00:00.2Z**", "**1970-01-01T12:00:00.277Z**" and "**1970-01-01T12:00:00.123456789Z**" are all valid datetime strings.  The seconds and nanoseconds fields are optional (the seconds field must be specified if the nanoseconds field is to be used).  The [time zone offset](https://en.wikipedia.org/wiki/ISO_8601#Time_zone_designators) is compulsory for this scalar. The time zone offset must either be `Z` (representing the UTC time zone) or be in the format `±hh:mm:ss`. The seconds field in the timezone offset will be considered valid even though it is not part of the ISO 8601 standard. */
export type AwsDateTime = any;

// ====================================================
// Documents
// ====================================================

export namespace CreateTodo {
  export type Variables = {
    input: CreateTodoInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    createTodo: Maybe<CreateTodo>;
  };

  export type CreateTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace UpdateTodo {
  export type Variables = {
    input: UpdateTodoInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    updateTodo: Maybe<UpdateTodo>;
  };

  export type UpdateTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace DeleteTodo {
  export type Variables = {
    input: DeleteTodoInput;
  };

  export type Mutation = {
    __typename?: 'Mutation';

    deleteTodo: Maybe<DeleteTodo>;
  };

  export type DeleteTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace GetTodo {
  export type Variables = {
    id: string;
  };

  export type Query = {
    __typename?: 'Query';

    getTodo: Maybe<GetTodo>;
  };

  export type GetTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace ListTodos {
  export type Variables = {
    filter?: Maybe<ModelTodoFilterInput>;
    limit?: Maybe<number>;
    nextToken?: Maybe<string>;
  };

  export type Query = {
    __typename?: 'Query';

    listTodos: Maybe<ListTodos>;
  };

  export type ListTodos = {
    __typename?: 'ModelTodoConnection';

    items: Maybe<(Maybe<Items>)[]>;

    nextToken: Maybe<string>;
  };

  export type Items = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace OnCreateTodo {
  export type Variables = {};

  export type Subscription = {
    __typename?: 'Subscription';

    onCreateTodo: Maybe<OnCreateTodo>;
  };

  export type OnCreateTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace OnUpdateTodo {
  export type Variables = {};

  export type Subscription = {
    __typename?: 'Subscription';

    onUpdateTodo: Maybe<OnUpdateTodo>;
  };

  export type OnUpdateTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export namespace OnDeleteTodo {
  export type Variables = {};

  export type Subscription = {
    __typename?: 'Subscription';

    onDeleteTodo: Maybe<OnDeleteTodo>;
  };

  export type OnDeleteTodo = {
    __typename?: 'Todo';

    id: string;

    name: string;

    completed: boolean;

    createdOnClientAt: AwsDateTime;
  };
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;
