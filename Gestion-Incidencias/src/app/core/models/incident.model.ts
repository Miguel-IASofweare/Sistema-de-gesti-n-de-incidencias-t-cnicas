/**
 * 
 * este archivo define el modelo que deben seguir los datos de los registros de incidentes
 * 
 */

export type IncidentStatus =
    | 'OPEN'
    | 'IN_PROGRES'
    | 'RESOLVED'
    | 'CLOSED';

export type IncidentPriority =
    | 'LOW'
    | 'MEDIUM'
    | 'HIGH'
    | 'CRITICAL';

export interface incident {

    readonly id: string;
    title: string;
    description: string;
    category: string;
    priority: IncidentPriority;
    status: IncidentStatus;
    reporterId: string;
    assignedAgentId: string;
    createdAt: string;
    updatedAt: string;

}