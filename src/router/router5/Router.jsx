import { BrowserRouter, Route, Switch  } from "react-router-dom";

import { Top } from "../../conponents/components5/pages/Top"
import { Users } from "../../conponents/components5/pages/Users"
import { DefaultLayout } from "../../conponents/components5/templates/DefaultLayout"
import { HeaderOnly } from "../../conponents/components5/templates/HeaderOnly"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>
                <Route  path="/users">
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
        )
}