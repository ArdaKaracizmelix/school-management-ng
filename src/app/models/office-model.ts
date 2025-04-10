import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('OfficeModel')
export class OfficeModel {
  @JsonProperty('id', Number,true)
  id: number | undefined;
  @JsonProperty('officeName', String, true)
  officeName: string | undefined;
}
