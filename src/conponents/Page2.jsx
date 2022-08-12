import { Link } from "react-router-dom"

export const Page2 = () => {
    return (
        <div>
        
            <h1>Page2ページです</h1>
            <br />
            <Link to="/page2/10">URL Parameter</Link>
            <br />
            <Link to="/page2/10?name=hogehoge">QueryParameter</Link>
            
        </div>
        );
};