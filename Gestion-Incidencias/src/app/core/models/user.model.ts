/**
 * 
 * interfaz que define cuales son los datos que pide el sistema para
 * definir un usuer
 * 
 */
export interface user {

    readonly id_user: number;
    name_user: string;
    email_user: string;
    active_user: boolean;

}