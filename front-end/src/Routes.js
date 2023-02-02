import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StudentLogIn } from './pages/StudentLogIn';
import { LogInPage } from './pages/LogInPage';
import { StudentDashboard } from './pages/StudentDash';
import { HCLogIn } from './pages/HClogIn';
import { PSLogIn } from './pages/PSlogIn';
import { StudentSignUpPage } from './pages/StudentSignUpPage';
import {PSsignUp} from './pages/PSsignUp'
import {HealthCareSignUp} from './pages/HealthCareSignUp'
import {ApproveAccommodation} from './pages/ApproveAccomodation';
import {RequestAccommodation} from './pages/RequestAccomodation';
import {ViewDocuments} from './pages/ViewDocuments';
import {CompleteProfile} from './pages/CompleteProfile';
import { ForgotPassword } from './components/ForgotPassword';
import { PasswordReset } from './components/PasswordReset';
import { Sidebar } from './components/Sidebar';

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
                <Route path="/approveacc">
                    <ApproveAccommodation />
                </Route>
                <Route path="/viewdoc">
                    <ViewDocuments />
                </Route>
                <Route path="/completeprof">
                    <CompleteProfile />
                </Route>
                <Route path="/reqaccomodation">
                    <RequestAccommodation />
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

                <Route path="/forgotpassword/:id/:token">
                    <ForgotPassword />
                </Route>
                <Route path="/passreset">
                    <PasswordReset />
                </Route>


                <Route path="/pssignup">
                <PSsignUp /> </Route>
                </Switch>
                </div>
                </>
        </Router>
    );
        
}