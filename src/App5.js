import { BrowserRouter } from "react-router-dom"
import { PrimaryButton } from "./conponents/components5/atoms/button/PrimaryButton.jsx"
import { SecondaryButton } from "./conponents/components5/atoms/button/SecondaryButton.jsx"
import { SearchInput } from "./conponents/components5/molecutes/SearchInput.jsx"
import { UserCard } from "./conponents/components5/organisms/user/UserCard.jsx"
import { HeaderOnly } from "./conponents/components5/templates/HeaderOnly";
import { DefaultLayout } from "./conponents/components5/templates/DefaultLayout";
import "./style5.css";

import { Router } from "./router/router5/Router";

export const App5 = () => {

    return(
        <Router />
        );
}