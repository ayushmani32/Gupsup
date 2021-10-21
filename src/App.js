import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";
import "./App.css";

const projectID = "5365fa7f-f448-4899-aa7b-6fb974812480";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
