import './firebase'
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import {signOutUser} from "./firebase";

function App() {
    return (
        <div className="App">
            <SignUpForm/>
            <LoginForm/>
            <button onClick={() => signOutUser()}>Sign out</button>
        </div>
    );
}

export default App;
