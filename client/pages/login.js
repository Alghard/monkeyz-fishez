import Header from "./components/header";
import Footer from "./components/footer";
import ThreeScene from "./threeScene";
import SignUpForm from "./components/signupForm";
import LoginForm from "./components/loginForm";

const Login = () => {
    return (
        <main>
            <ThreeScene />
            <Header></Header>
            <SignUpForm />
            <LoginForm />
            <Footer></Footer>
        </main>
    );
};

export default Login;
