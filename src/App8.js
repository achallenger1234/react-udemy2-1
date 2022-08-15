import axios from "axios";

export const App8 = () => {     
    const onClickUsers = () => {
        axios.get("//jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data)
            .catch((err) => {console.log(err)});
        });
    }
    const onClickUser1 = () => {
        axios.get("//jsonplaceholder.typicode.com/users?id=1")
        .then((res) => {
            console.log(res.data)
            .catch((err) => {console.log(err)});
        });
    }
    return (
        <div className="App">
            <button onClick={onClickUsers}>users</button>
            <button onClick={onClickUser1}>id=1のuser</button>
        </div>
        );
};