import {JsonObject , JsonProperty} from 'json2typescript'

@JsonObject('ClassroomModel')
export class ClassroomModel {
  @JsonProperty('id', Number,true)
  id : number | undefined

  @JsonProperty('classroomName',String,true)
  classroomName : string | undefined
}
