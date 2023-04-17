import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Banner from "../../Components/Banner/Banner";
import PaymentForm from "../../Components/Payments/PaymentForm";
import CheckoutForm from "../../Components/Payments/CheckoutForm";

const Donations = () => {
    return (
        <div>
            <NavBar />
            <Banner bannerText={"Donations"} />

            <div className="container">
            <div className="row gx-5">
                <h1>Donations Area</h1>
                
                <div className="col-8">
                    <div className="job-ops">
                    Stats Stats Stats<br></br>
                Donations help our organization<br></br>
                Some of current goals that your donations would contribute to are:<br></br>
                1. Scholarships<br></br>
                2. Emergency funds for our Members<br></br>
                3. Future Goals that we are saving for:<br></br>
                a. Enriched learning & development programs for Actives<br></br>
                    </div>
                </div>

                <div className="col-4">
                    <div className="job-resources">
                        <PaymentForm />
                    </div>
                </div>
            </div>
        </div>
            <div>
                
            </div>
        </div>

    )
}

export default Donations