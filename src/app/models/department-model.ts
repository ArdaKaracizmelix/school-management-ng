import {JsonProperty,JsonObject} from 'json2typescript';

@JsonObject('DepartmentModel')
export class DepartmentModel {
  @JsonProperty('id', Number, true)
  id: number | undefined;
  @JsonProperty('deptName', String,true)
  deptName: string | undefined;
























}
