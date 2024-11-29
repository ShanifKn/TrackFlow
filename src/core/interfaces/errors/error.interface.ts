export interface TrackError {
  errorCode: number;
  message: string;
  errors: ValidationError[];
}

export interface ValidationError {
  msg: string;
  param: string;
}
