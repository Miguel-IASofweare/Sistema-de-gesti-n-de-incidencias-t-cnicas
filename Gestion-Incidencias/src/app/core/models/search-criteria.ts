import { IncidentStatus } from "./incident.model";

/**
 * 
 * clase que construlle el buscador general
 * 
 */
export class SearchCriteria {

  constructor(
    public keyword: string,
    public status?: IncidentStatus
  ) {}
}