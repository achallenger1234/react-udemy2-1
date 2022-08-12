import styled from "styled-components";
import { SearchInput } from "../molecutes/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
    return {
        id: val,
        name: `じゃけ${val}`,
        image: "https://source.unsplash.com/Sg3XwuEpybU",
        phone: "000-0000-0000",
        email: "1234@example.com",
        company: { 
            name: "テスト株式会社"
        },
        website: "https://google.com"       
    }
})

const user = {
    name: "じゃけ",
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    phone: "000-0000-0000",
    email: "1234@example.com",
    company: { 
        name: "テスト株式会社"
    },
    website: "https://google.com"
};

export const Users = () => {
    
    return (
        <SContainer>
            <h2>ユーザー一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </SContainer>
        );
};

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;