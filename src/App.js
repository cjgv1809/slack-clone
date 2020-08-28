import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app-body">
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <div className="app-content">
                    <h1>Welcome!</h1>
                    <p>
                      This Slack-Clone is still in development, so you probably
                      won't find all the functionalities that the real Slack
                      has, howewer, you can add new channels and start chatting
                      in real-time with other users. Hope you like it!
                    </p>
                    <span>
                      Regards, <br />
                      Carlos Gomes
                    </span>
                  </div>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
