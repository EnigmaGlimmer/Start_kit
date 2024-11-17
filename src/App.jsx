import { useRecoilState, useRecoilValue } from "recoil";
import { Link, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Counter from "@pages/Counter";
import { getFullName, userState } from "@store";
import AuthLayout from "@components/layouts/AuthLayout";
import { withNonAuthLayout } from "@components/layouts/withLayout";

import "@styles/App.css";

function App() {
  const [user, setUser] = useRecoilState(userState);
  const fullName = useRecoilValue(getFullName);

  const onLogin = () => {
    setUser({
      isLoggedIn: "true",
      userEmail: "eg@gmail.com",
      firstName: "Enigma",
      lastName: "Glimmer",
    });
  };

  return (
    <div className = "app">
      <header className="header">
        <Link to = "/">Home</Link>
        <Link to = "/counter">Counter</Link>
        <Link to = "/setting">Settings</Link>
        <Link to = "/account">My Account</Link>
        <button onClick={onLogin}>Log in</button>
      </header>

      <div className="content">
        {user.isLoggedIn
          ? <p>{fullName} has been logged in.</p>
          : <p>User is not logged in.</p>
        }

        <Routes>
          <Route 
            path="/"
            exact
            element = {<Home />}
          />
          <Route 
            path = "/counter"
            element = {<Counter />}
          />

          <Route 
            path="/setting"
            element = {
              <AuthLayout>
                <Home />
              </AuthLayout>
            }
          />
          <Route
            path="account"
            element = {
              <AuthLayout>
                <Counter />
              </AuthLayout>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
