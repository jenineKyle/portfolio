import ContactForm from "../../components/ContactForm";
import Navbar from "../../components/NavBar"


export default function Contact() {
    return (
        <div>
            <Navbar />
            <section className="text-center">
                <ContactForm />
            </section>
        </div>
    );
}
