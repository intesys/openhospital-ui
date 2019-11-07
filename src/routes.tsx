import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Billing from "./components/billing/Billing";
import Calendar from "./components/Calendar/Calendario";
import ColleagueDetails from "./components/colleaguesDatabase/ColleagueDetails/ColleagueDetails";
import ColleaguesDatabase from "./components/colleaguesDatabase/ColleaguesDatabase";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import News from "./components/news/News";
import NewsDetails from "./components/news/newsDetails/NewsDetails";
import Notification from "./components/Notifications/Notification";
import setting from "./components/OHSettings/Setting";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import PatientLabTest from "./components/patientsDatabase/NewLabTest";
import NewOpd from "./components/patientsDatabase/NewOpd";
import NewPatient from "./components/patientsDatabase/NewPatient";
import Vaccine from "./components/patientsDatabase/NewVaccination";
import Opd from "./components/patientsDatabase/Opd";
import PatientAdmission from "./components/patientsDatabase/PatientAdmission";
import PatientDetails from "./components/patientsDatabase/PatientDetails";
import PatientExamination from "./components/patientsDatabase/PatientExamination";
import PatientsDatabase from "./components/patientsDatabase/PatientsDatabase";
import PatientTherapy from "./components/patientsDatabase/PatientTherapy";
import PatientVaccine from "./components/patientsDatabase/PatientVaccination";
import PatientVisit from "./components/patientsDatabase/PatientVisit";
import Pharmacy from "./components/pharmacy/Pharmacy";
import Ward from "./components/ward/Ward";


const Routes = () => (
      
   <>
        
        <Header />
        <Switch>
            
            <Redirect from="/" exact={true} to="/dashboard" />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact={true} path="/PatientsDatabase" component={PatientsDatabase} />
            <Route path="/PatientsDatabase/NewPatient" component={NewPatient} />
            <Route path="/PatientDatabase/PatientVisit/:id" component={PatientVisit}/>
            <Route path="/PatientDatabase/PatientDetails/:id" component={PatientDetails}/>
            <Route path="/PatientDatabase/PatientAdmission/:id" component={PatientAdmission}/>
            <Route path="/PatientDatabase/PatientLabTest" component={PatientLabTest}/>
            <Route path="/PatientDatabase/PatientTherapy/:id" component={PatientTherapy}/>
            <Route path="/PatientDatabase/PatientExamination" component={PatientExamination}/>
            <Route path="/PatientDatabase/PatientVaccination/" component={PatientVaccine}/>
            <Route path="/PatientDatabase/NewVaccination" component={Vaccine}/>
            <Route path="/PatientDatabase/Opd/:id" component={Opd}/>
            <Route path="/PatientDatabase/NewOpd/:id" component={NewOpd}/>
            <Route exact={true} path="/colleagues" component={ColleaguesDatabase} />
            <Route path="/colleagues/colleagueDetails" component={ColleagueDetails} />
            <Route path="/pharmacy" component={Pharmacy} />
            <Route path="/ward" component={Ward} />
            <Route path="/billing" component={Billing} />
            <Route path="/news" component={News} />
            <Route exact={true} path="/newsDetails" component={NewsDetails} />
            <Route exact={true} path="/setting" component={setting} />
            <Route exact={true} path="/Calendar" component={Calendar} />
            <Route exact={true} path="/Notification" component={Notification} />

            {/* If no Route matches, show PageNotFound component */}
            <Route component={PageNotFound} />
        </Switch>
        <Footer />
       

    </>

    
   
    
);




export default Routes;
