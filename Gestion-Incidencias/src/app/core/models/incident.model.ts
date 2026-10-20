/**
 * 
 * este archivo define el modelo que deben seguir los datos de los registros de incidentes
 * 
 */

export type incident_status =
    | 'open'
    | 'in progres'
    | 'clouse';

export type incident_priority =
    | 'low'
    | 'most low'
    | 'emergenci'
    | 'most dangerous'

export interface incident {

    readonly id_incidencia: number;
    titulo_incidencia: string;
    descripcion_incidencia: string;
    estado_incidencia: incident_status;
    prioridad_incidencia: incident_priority;

}