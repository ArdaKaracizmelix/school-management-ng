import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('ExamResultModel')
export class ExamResultModel {
  @JsonProperty('id', Number,true)
  id: number | undefined;

  @JsonProperty('score', Number,true)
  score: number | undefined;

  @JsonProperty('examID', Number,true)
  examID: number | undefined;

  @JsonProperty('studentID', Number,true)
  studentID: number | undefined;

}
