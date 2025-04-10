import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('StudentQueryModel')
export class StudentQueryModel {
  @JsonProperty('id', Number,true)
  id:Number |  undefined;
  @JsonProperty('firstName', String,true)
  firstName: String  | undefined;
  @JsonProperty('lastName', String,true)
  lastName: String | undefined;
  @JsonProperty('pageNo',Number,true)
  pageNo: Number | undefined;
  @JsonProperty('pageSize',Number,true)
  pageSize: Number | undefined;
  @JsonProperty('sortField',String,true)
  sortField: String | String[] | object| undefined;
  @JsonProperty('sortDirection',Number,true)
  sortDirection: Number |  undefined;


}
