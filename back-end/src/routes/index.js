import { StudentsignUpRoute } from './StudentsignUpRoute';
import { testRoute } from './testRoute';
import { StudentlogInRoute } from './StudentlogInRoute';
import {HCsignUpRoute} from './HCsignUpRoute';
import {HClogInRoute} from "./HClogInRoute";
 import {PSsignUpRoute} from './PSsignUpRoute';

import { PSlogInRoute } from './PSlogInRoute';
import {ForgotPasswordRoute, PasswordResetRoute,ChangePasswordRoute } from "./router";


export const routes = [
    PSsignUpRoute,
 ForgotPasswordRoute,
 PasswordResetRoute,
 ChangePasswordRoute,
   HCsignUpRoute,
    StudentlogInRoute,
    StudentsignUpRoute,
    HClogInRoute,
    PSlogInRoute,
    testRoute,
];
