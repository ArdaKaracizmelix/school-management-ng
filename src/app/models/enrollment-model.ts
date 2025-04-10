import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('EnrollmentModel')
export class EnrollmentModel {

  @JsonProperty('id', Number,true)
  id: number | undefined;
  @JsonProperty('courseID', Number,true)
  courseID: number | undefined;
  @JsonProperty('studentID', Number,true)
  studentID: number | undefined;

}
