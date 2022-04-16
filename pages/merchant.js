import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Merchant = () => {
  // const { register, handleSubmit } = useForm();
  const [businessName, setBusinessName] = useState('');
  const [businessLogo, setBusinessLogo] = useState(null);
  const [marchentPhone, setMarchentPhone] = useState('');


  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('businessName', businessName)
    formData.append('businessLogo', businessLogo)
    formData.append('marchentPhone', marchentPhone)

    fetch('http://localhost:5000/marchents', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });



    // console.log(formData);

  }

  return (
    <>
      <Mobilenav></Mobilenav>
      <div className="container-fluid dashboard">
        <div className="row g-0">
          <div className="col-md-2">
            <Sidenav></Sidenav>
          </div>
          <div className="col-md-10 dashboard">
            <Dashboardnav></Dashboardnav>
            <div className="text-center">
              <h1>Merchant Register</h1>
              <form onSubmit={handleSubmit}>
                <h6>Name of Business </h6>
                <input
                  type="text"
                  onChange={e => setBusinessName(e.target.value)}

                />{" "}
                <br />
                <h6>Upload Company logo </h6>
                <input
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={e => setBusinessLogo(e.target.files[0])}


                />
                <br />
                <h6>Phone Number </h6>
                <input
                  onChange={e => setMarchentPhone(e.target.value)}

                  type="number"

                />
                <br />
                <input type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merchant;
