import {JsonProperty,JsonObject} from 'json2typescript';

@JsonObject('UserModel')
export class UserModel {
  @JsonProperty('id', Number)
  id: number | undefined;
  @JsonProperty('username', String)
  username: string | undefined;
  @JsonProperty('password', String)
  password: string | undefined;
  @JsonProperty('Role', String)
  role:  "STUDENT" | "INSTRUCTOR" | "DEAN" | undefined;


}
