import { incident_status } from "./incident.model";

export class SearchCriteria {

  constructor(
    public keyword: string,
    public status?: incident_status
  ) {}
}