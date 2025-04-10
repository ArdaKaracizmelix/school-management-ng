  import {JsonObject, JsonProperty} from 'json2typescript';
import { UserModel } from './user-model';

@JsonObject('DeanModel')
export class DeanModel extends UserModel {
  @JsonProperty('id', Number,true)
  did: number | undefined;
  @JsonProperty('email', String,true)
  email: string | undefined;
  @JsonProperty('gender', String,true)
  gender: string | undefined;
  @JsonProperty('phoneNumber', String,true)
  phoneNumber: string | undefined;
  @JsonProperty('address', String,true)
  address: string | undefined;
  @JsonProperty('deptID',Number,true)
  deptID: number | undefined;
  @JsonProperty('deptName',String,true)
  deptName: string | undefined;
  @JsonProperty('officeID',Number,true)
  officeID: number | undefined;
  @JsonProperty('officeName', String,true)
  officeName: string | undefined;
  @JsonProperty('birthDate',Date,true)
  birthDate: Date | undefined;
  @JsonProperty('firstName', String,true)
  firstName: string | undefined;
  @JsonProperty('lastName', String,true)
  lastName: string | undefined;
  @JsonProperty('middleName',String,true)
  middleName: string | undefined;

  @JsonProperty('userID',Number,true)
  userID: Number | undefined;
























}
