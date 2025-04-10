import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('PageAndSortModel')
export class PageAndSortModel {
  @JsonProperty('pageNo',Number,true)
  pageNo: number | undefined;
  @JsonProperty('pageSize',String,true)
  pageSize: number | undefined;
  @JsonProperty('sortField',String,true)
  sortField: string | string[] | undefined;
  @JsonProperty('sortDirection',Number,true)
  sortDirection: number | string | undefined;
}
