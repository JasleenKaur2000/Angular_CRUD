export interface IResponseArrayModel<IUserModel> {
  response: number;
  message: string;
  data: IUserModel[];
}
