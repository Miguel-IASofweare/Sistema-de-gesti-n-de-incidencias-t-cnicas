import { user } from "../models/user.model";
import { incident } from "../models/incident.model";
import { email } from "@angular/forms/signals";

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
