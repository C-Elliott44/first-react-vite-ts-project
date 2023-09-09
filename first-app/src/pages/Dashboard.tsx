import Blog from "../components/Blog";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Testimonials from "../components/Testimonials";

export default function Dashboard() {
    return(
        <>
            <main className="flex-shrink-0">
                <Navigation />
                <Header />
                <Feature />
                <Testimonials />
                <Blog />
                <Footer />
            </main>
        </>
    )
}