import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StudentLogIn } from './pages/StudentLogIn';
import { LogInPage } from './pages/LogInPage';
import { StudentDashboard } from './pages/StudentDash';
import { HCLogIn } from './pages/HClogIn';
import { PSLogIn } from './pages/PSlogIn';
import { StudentSignUpPage } from './pages/StudentSignUpPage';
import {PSsignUp} from './pages/PSsignUp'
import {HealthCareSignUp} from './pages/HealthCareSignUp'
import { PrivateRoute } from './auth/PrivateRoute';
import "./index.css";
import { SignUp } from './pages/SignUp';
import React from 'react';

export const Routes = () => {
    return (
        
        <Router>
       
       <>
       
          <div>
           <Switch>
          
          
                <Route path="/" exact>
                    <SignUp />
                </Route>
                <Route path="/studentlogin">
                    <StudentLogIn />
                </Route>
                <Route path="/studentdash">
                    <StudentDashboard />
                </Route>
                <Route path="/studentsignup">
                <StudentSignUpPage /> </Route>
                
                <Route path="/hcsignup">
                <HealthCareSignUp /> </Route>

                <Route path="/login">
                <LogInPage /> </Route>

                <Route path="/hclogin">
                <HCLogIn /> </Route>

                <Route path="/pslogin">
                <PSLogIn /> </Route>


                <Route path="/pssignup">
                <PSsignUp /> </Route>
                </Switch>
                </div>
                </>
        </Router>
    );
        
}