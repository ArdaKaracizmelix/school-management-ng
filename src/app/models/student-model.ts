import {JsonObject, JsonProperty} from 'json2typescript';
import { UserModel } from './user-model';

@JsonObject('StudentModel')
export class StudentModel  extends UserModel{
  @JsonProperty('id',Number,true)
  sid: number | undefined;
  @JsonProperty('email',String,true)
  email: string | undefined;
  @JsonProperty('gender',String,true)
  gender: string | undefined;
  @JsonProperty('address',String,true)
  address: string | undefined;
  @JsonProperty('phoneNumber',String,true)
  phoneNumber: string | undefined;
  @JsonProperty('deptID',Number,true)
  deptID: string | undefined;
  @JsonProperty('deptName',String,true)
  deptName: string | undefined;
  @JsonProperty('birthDate',Date,true)
  birthDate: Date | undefined;
  @JsonProperty('firstName',String,true)
  firstName: string | undefined;
  @JsonProperty('lastName',String,true)
  lastName: string | undefined;
  @JsonProperty('middleName',String,true)
  middleName: string | undefined;
  @JsonProperty('userID',Number,true)
  userID: Number | undefined;








}
