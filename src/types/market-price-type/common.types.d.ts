export type CommonResponse<T> = {
  success?: boolean;
  data?: T;
  error?: Exception;
};

export type Exception = {
  message?: string;
  code?: string;
  details?: string[];
};
