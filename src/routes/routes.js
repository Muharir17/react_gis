import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";

// route for admin

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/dashboard/Index";

function Routes() {
    return (
        <Switch>

            {/* route public */}
            <Route exact path="/admin/login">
                <Login/>
            </Route>

            {/* private route */}
            <PrivateRoute exact path="/admin/dashboard">
                <Dashboard/>
            </PrivateRoute>


        </Switch>
    )
}

export default Routes