import { Page2 } from "../conponents/Page2";
import { UrlParameter } from "../conponents/UrlParameter";

export const Page2Routes = [
    {
        path: "/",
        exact: true,
        children: <Page2 />
    },
    {
        path: "/:id",
        exact: false,
        children: <UrlParameter />
    },

]