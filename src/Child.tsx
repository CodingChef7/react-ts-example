import React, {useState} from 'react';

export interface User {
    username: string;
    password: string;
}

interface ChildProps {
    onSubmit: React.Dispatch<React.SetStateAction<User>>;
}

const Child = ({onSubmit}: ChildProps) => {
    const [user, setUser] = useState<User>(
        {
            username: '', password: ''
        });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUser(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={user.username} onChange={handleChange}/>
            <input type="password" name="password" value={user.password} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Child;
