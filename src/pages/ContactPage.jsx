import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const ContactPage =() =>{
  return(
    <div>
      <Header />
      <div className="maincont">
                <h1>Contact Us</h1>
                <p>
                    We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.
                </p>
                <h2 > General Enquiries</h2>
                <hr/>
                <p><b>Vivekanand College Main Campus</b><br/>
                [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India<br/>
        
                Phone: <b>+91 12345 67890</b><br/>
                Email: <b>info@vivekanandcollege.edu</b><br/>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST
                </p>
                <h2>Admission Office</h2>
                <hr/>
                <p>For all admission-related queries regarding undergraduate or postgraduate programs:<br/>
                   Phone: +91 98765 43210<br/>
                   Email: admissions@vivekanandcollege.edu</p>
                <h2> Student Support Services</h2>
                <hr/>
                <p>For current student support, academic advising, or general assistance:<br/>
                   Phone: +91 87654 32109<br/>
                   Email: studentsupport@vivekanandcollege.edu</p>
                <h2>Find Us on the Map</h2>   
                <hr/>
                <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
                <a href="https://maps.google.com/?q=Vivekanand+College+Kolhapur" target="_blank" rel="noopener noreferrer" >View on Google Maps</a>
                <h2>Send Us a Message</h2>
                <hr/>
                <form className="msgform">
                  <label>Name:</label>
                  <input type="text" placeholder="Enter Your Name"></input>
                  <hr/>
                   <label>Email:</label>
                  <input type="email" placeholder="Enter your email"></input>
                  <hr/>
                   <label>Mobail No.:</label>
                  <input type="text" placeholder="Subject"></input>
                  <hr/>
                   <label>Feedback:</label>
                    <textarea placeholder="Your Message" required row='5'></textarea>  
                    <hr/>
                    <button type="submit">Send Message</button>            
                </form>
      </div>
      <Footer/>
    </div>
  )
}
export default ContactPage;