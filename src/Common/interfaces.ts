export type Nullable<T> = T | null;
export type Message = string;

export type MessageResponse<T> = T & {
  message: Message;
};
export type DataResponse<T> = { Data: T };
