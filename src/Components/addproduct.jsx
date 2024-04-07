import React from 'react';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { ProductContext } from '../context';


export function AddProduct() {

    const { warn, addProduct, setName, setUsername, setEmail, setStreet, setSuite, setCity, setZipcode, setLat, setLng, setphone, setWebsite, setCompname, setcompcp, setCompbs } = useContext(ProductContext)

    return (

        <div className="addproduct">
            <div className="textfeild">
                <div className="warndiv">
                    {
                        warn && <div className="warning"><p>Please fill all the field before submit</p></div>
                    }
                </div>
                <div className="nametitle">
                    <h5>NAME DETAILS :</h5>
                </div>
                <div className="namefeild">
                    <TextField
                        required
                        id="Name"
                        label="Name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        required
                        id="UserName"
                        label="UserName"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField
                        required
                        id="Email"
                        label="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="addresstitle">
                    <h5>ADDRESS DETAILS :</h5>
                </div>
                <div className="addressfeild">
                    <TextField
                        required
                        id="Street"
                        label="Street"
                        onChange={(e) => setStreet(e.target.value)}
                    />

                    <TextField
                        required
                        id="Suite"
                        label="Suite"
                        onChange={(e) => setSuite(e.target.value)}
                    />

                    <TextField
                        required
                        id="City"
                        label="City"
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <TextField
                        required
                        id="Zipcode"
                        label="Zipcode"
                        onChange={(e) => setZipcode(e.target.value)}
                    />

                    <TextField
                        required
                        id="Lattitude"
                        label="Lattitude"
                        onChange={(e) => setLat(e.target.value)}
                    />

                    <TextField
                        required
                        id="Longitude"
                        label="Longitude"
                        onChange={(e) => setLng(e.target.value)}
                    />
                </div>
                <div className="contacttitle">
                    <h5>CONTACT DETAILS :</h5>
                </div>
                <div className="contactfeild">
                    <TextField
                        required
                        id="Phone"
                        label="Phone"
                        onChange={(e) => setphone(e.target.value)}
                    />

                    <TextField
                        required
                        id="Website"
                        label="Website"
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div className="companytitle">
                    <h5>COMPANY DETAILS :</h5>
                </div>
                <div className="companyfeild">
                    <TextField
                        required
                        id="Name"
                        label="Name"
                        onChange={(e) => setCompname(e.target.value)}
                    />

                    <TextField
                        required
                        id="CatchPhrase"
                        label="CatchPhrase"
                        onChange={(e) => setcompcp(e.target.value)}
                    />

                    <TextField
                        required
                        id="Bs"
                        label="Bs"
                        onChange={(e) => setCompbs(e.target.value)}
                    />
                </div>
                <div className="btn">
                    <button onClick={() => addProduct()} >SUBMIT</button>
                </div>
            </div>
        </div>
    )
}