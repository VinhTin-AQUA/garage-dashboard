export interface ApiResponse<T = any> {
  success: {
    [key: string]: T;
  };
  error: any;
}
