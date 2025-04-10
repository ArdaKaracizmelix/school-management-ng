import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('ExamModel')
export class ExamModel {
  @JsonProperty('id', Number,true)
  id: number | undefined;

  @JsonProperty('status', Boolean,true)
  status: boolean | undefined;

  @JsonProperty('examType', String,true)
  examType: String | undefined;

  @JsonProperty('courseId', Number,true)
  courseId: number | undefined;











}
