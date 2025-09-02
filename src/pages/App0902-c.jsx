import { createContext, useContext, useState } from 'react'

export default function App() {
    // 建立共用環境區域
    const UserContext = createContext({});
    // 建立使用者變數
    const [username, setUsername] = useState('demo');
    // 建立登入鈕的控制
    const [isLogin, setIsLogin] = useState(false);


    // 建立登入元件
    const LoginForm = () => {
        const { username, setUsername, setIsLogin } = useContext(UserContext);
        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id='username'
                    placeholder='請輸入帳號'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type='button' onClick={() => setIsLogin(true)}>登入</button>
            </>
        )
    }
    // 登入後的歡迎元件
    const Greeting = () => {
        const { username } = useContext(UserContext);
        return (
            <div>
                hi,{username}
            </div>
        )
    }

    
    return (
        <>
            <h1>useContext</h1><hr style={{ marginBottom: '50px' }} />
            <UserContext.Provider value={{username,setUsername,setIsLogin}}>
                {
                    isLogin ? <Greeting /> : <LoginForm />
                }
            </UserContext.Provider>
        </>
    )

}