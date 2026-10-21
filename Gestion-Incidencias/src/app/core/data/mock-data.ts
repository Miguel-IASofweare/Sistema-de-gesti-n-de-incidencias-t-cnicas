import { user } from "../models/user.model";
import { incident } from "../models/incident.model";
import { email } from "@angular/forms/signals";

/**
 * 
 * datos de prueba para revisar que todas las interface esten funcionando correctamente
 * 
 */
export const USERS: user[] = [

    {

        id_user: 1,
        name_user: "Miguel Angel",
        email_user: "miguel@ias.com.co",
        active_user: true

    },

    {

        id_user: 2,
        name_user: "Nini Garcia",
        email_user: "nini@gmail.com",
        active_user: false

    },

    {

        id_user: 3,
        name_user: "Elizabeth Montes",
        email_user: "ElizabethCarmen@gamil.com",
        active_user: true

    }

];

export const INCIDENTS: incident[] = [
  {
    id: 'INC-001',
    title: 'Error de inicio de sesión',
    description: 'Los usuarios no pueden iniciar sesión en la plataforma.',
    category: 'Autenticación',
    priority: 'HIGH',
    status: 'OPEN',
    reporterId: 'USER-001',
    assignedAgentId: 'AGENT-001',
    createdAt: '2026-10-21T08:00:00Z',
    updatedAt: '2026-10-21T08:00:00Z'
  },
  {
    id: 'INC-002',
    title: 'Fallo en la API de clientes',
    description: 'La API devuelve error 500 al consultar clientes.',
    category: 'Backend',
    priority: 'CRITICAL',
    status: 'IN_PROGRES',
    reporterId: 'USER-002',
    assignedAgentId: 'AGENT-002',
    createdAt: '2026-10-20T14:30:00Z',
    updatedAt: '2026-10-21T09:15:00Z'
  },
  {
    id: 'INC-003',
    title: 'Pérdida de conexión con la base de datos',
    description: 'La aplicación pierde la conexión después de varios minutos de uso.',
    category: 'Base de Datos',
    priority: 'MEDIUM',
    status: 'RESOLVED',
    reporterId: 'USER-003',
    assignedAgentId: 'AGENT-001',
    createdAt: '2026-10-19T10:45:00Z',
    updatedAt: '2026-10-20T16:20:00Z'
  }
];
