import {JsonObject, JsonProperty} from 'json2typescript';
import {PageAndSortModel} from './page-and-sort-model';
import {FilterMetadata} from 'primeng/api';

@JsonObject('InstructorQueryModel')
export class InstructorQueryModel {
  @JsonProperty('id', Number,true)
  id:Number |  undefined;
  @JsonProperty('firstName', String,true)
  firstName: String  | undefined;
  @JsonProperty('lastName', String,true)
  lastName: String | undefined;
  // @JsonProperty('address', String,true)
  // address: String | undefined;
  // @JsonProperty('birthDate',Date,true)
  // birthDate: Date | undefined;
  // @JsonProperty('email', String,true)
  // email: String |  undefined;
  // @JsonProperty('gender', String,true)
  // gender: String | undefined;
  // @JsonProperty('phoneNumber', String,true)
  // phoneNumber: String| undefined;
  // @JsonProperty('officeName', String,true)
  // officeName: String | undefined;
  // @JsonProperty('deptName',String,true)
  // deptName: String | undefined;
  @JsonProperty('pageNo',Number,true)
  pageNo: Number | undefined;
  @JsonProperty('pageSize',Number,true)
  pageSize: Number | undefined;
  @JsonProperty('sortField',String,true)
  sortField: String | String[] | object| undefined;
  @JsonProperty('sortDirection',Number,true)
  sortDirection: Number |  undefined;


}
