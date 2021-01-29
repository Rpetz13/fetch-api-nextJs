import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar title="Next | API" />
      <div>
        <div class="d-flex align-items-center" style={{ height: "90vh" }}>
          <div class="col text-center">
            <h1>Welcome to Next | API</h1>
            <p>
              This is the result of implementing
              <br />
              the API fetch in Next.JS
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
