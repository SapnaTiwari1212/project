import ProfileCard from "./components/ProfileCard";
import Counter from"./components/Counter";
import UserFrom from"./components/UserFrom";
import LoginStatus from "./components/LoginStatus";


function App() {
  return (
    <div>
      <ProfileCard
      name="Sapna"
      age={19}
      course="AI & ML"
      />
      <Counter />
      <UserFrom />
      <LoginStatus />
     

    </div>
  );
}

export default App;