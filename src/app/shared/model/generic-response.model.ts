export interface IResponseModel<IUserModel> {
  response: number;
  message: string;
  data: IUserModel;
}
