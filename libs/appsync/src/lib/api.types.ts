

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTodo
// ====================================================

export interface CreateTodo_createTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface CreateTodo {
  createTodo: CreateTodo_createTodo | null;
}

export interface CreateTodoVariables {
  input: CreateTodoInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTodo
// ====================================================

export interface UpdateTodo_updateTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface UpdateTodo {
  updateTodo: UpdateTodo_updateTodo | null;
}

export interface UpdateTodoVariables {
  input: UpdateTodoInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteTodo
// ====================================================

export interface DeleteTodo_deleteTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface DeleteTodo {
  deleteTodo: DeleteTodo_deleteTodo | null;
}

export interface DeleteTodoVariables {
  input: DeleteTodoInput;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodo
// ====================================================

export interface GetTodo_getTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface GetTodo {
  getTodo: GetTodo_getTodo | null;
}

export interface GetTodoVariables {
  id: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListTodos
// ====================================================

export interface ListTodos_listTodos_items {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface ListTodos_listTodos {
  __typename: "ModelTodoConnection";
  items: (ListTodos_listTodos_items | null)[] | null;
  nextToken: string | null;
}

export interface ListTodos {
  listTodos: ListTodos_listTodos | null;
}

export interface ListTodosVariables {
  filter?: ModelTodoFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnCreateTodo
// ====================================================

export interface OnCreateTodo_onCreateTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface OnCreateTodo {
  onCreateTodo: OnCreateTodo_onCreateTodo | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnUpdateTodo
// ====================================================

export interface OnUpdateTodo_onUpdateTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface OnUpdateTodo {
  onUpdateTodo: OnUpdateTodo_onUpdateTodo | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: OnDeleteTodo
// ====================================================

export interface OnDeleteTodo_onDeleteTodo {
  __typename: "Todo";
  id: string;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

export interface OnDeleteTodo {
  onDeleteTodo: OnDeleteTodo_onDeleteTodo | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// null
export interface CreateTodoInput {
  id?: string | null;
  name: string;
  completed: boolean;
  createdOnClientAt: any;
}

// null
export interface UpdateTodoInput {
  id: string;
  name?: string | null;
  completed?: boolean | null;
  createdOnClientAt?: any | null;
}

// null
export interface DeleteTodoInput {
  id?: string | null;
}

// null
export interface ModelTodoFilterInput {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  completed?: ModelBooleanFilterInput | null;
  createdOnClientAt?: ModelStringFilterInput | null;
  and?: (ModelTodoFilterInput | null)[] | null;
  or?: (ModelTodoFilterInput | null)[] | null;
  not?: ModelTodoFilterInput | null;
}

// null
export interface ModelIDFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: (string | null)[] | null;
  beginsWith?: string | null;
}

// null
export interface ModelStringFilterInput {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: (string | null)[] | null;
  beginsWith?: string | null;
}

// null
export interface ModelBooleanFilterInput {
  ne?: boolean | null;
  eq?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================