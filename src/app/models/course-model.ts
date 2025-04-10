import {JsonProperty , JsonObject} from 'json2typescript';

@JsonObject('CourseModel')
export class CourseModel {
  @JsonProperty('id', Number,true)
  id!: number;

  @JsonProperty('courseName', String,true)
  courseName: string | undefined;

  @JsonProperty('classroomID', Number,true)
  classroomID: number | undefined;

  @JsonProperty('instructorID', Number,true)
  instructorID: number | undefined;

  @JsonProperty('deptID', Number,true)
  deptID: number | undefined;















}
