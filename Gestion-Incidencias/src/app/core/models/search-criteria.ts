import { incident_status } from "./incident.model";

/**
 * 
 * clase que construlle el buscador general
 * 
 */
export class SearchCriteria {

  constructor(
    public keyword: string,
    public status?: incident_status
  ) {}
}