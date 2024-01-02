import React, { useState } from 'react';
import Child, {User} from './Child';

const Parent = () => {
    const [submittedUser, setSubmittedUser] = useState<User>(
        { username: '', password: '' }
    );

    return (
        <div>
            <Child onSubmit={setSubmittedUser} />
            <p>Submitted Username: {submittedUser.username}</p>
            <p>Submitted Password: {submittedUser.password}</p>
        </div>
    );
};

export default Parent;
