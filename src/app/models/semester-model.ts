import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('SemesterModel')
export class SemesterModel {
  @JsonProperty('id',Number,true)
  id: number | undefined;
  @JsonProperty('name',String,true)
  name: string | undefined;
  @JsonProperty('startDate',String,true)
  startDate: string | undefined;
  @JsonProperty('endDate',String,true)
  endDate: string | undefined;
}
