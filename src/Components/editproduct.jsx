import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';
import { ProductContext } from '../context';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from '../api';


export function EditProduct() {

    const { dataid } = useParams()


    const [result, setResult] = useState("")

    const postProduct = async () => {

        try {
            const sud = await axios.get(`${API}/${dataid}`)
            setResult(sud.data)


        }
        catch (error) {
            console.error("Error message", error)
        }

    }

    useEffect(() => {
        postProduct()
    }, [dataid])


    return (
        result ? <EditProductForm product={result} prodid={dataid} /> : "Loading....."
    )
}

function EditProductForm({ product, prodid }) {

    const { editProduct } = useContext(ProductContext)
    const [nameEditeded, setNameEditeded] = useState(product?.name || '')
    const [usernameEditeded, setUsernameEditeded] = useState(product?.username || '')
    const [emailEditeded, setEmailEditeded] = useState(product?.email || '')
    const [streetEditeded, setStreetEditeded] = useState(product?.address?.street || '')
    const [suiteEditeded, setSuiteEditeded] = useState(product?.address?.suite || '')
    const [cityEditeded, setCityEditeded] = useState(product?.address?.city || '')
    const [zipcodeEditeded, setZipcodeEdited] = useState(product?.address?.zipcode || '')
    const [latEditeded, setLatEditeded] = useState(product?.address?.geo?.lat || '')
    const [lngEditeded, setLngEditeded] = useState(product?.address?.geo?.lng || '')
    const [phoneEditeded, setPoneEditeded] = useState(product?.phone || '')
    const [webEditeded, setWebEditeded] = useState(product?.website || '')
    const [compnameEditeded, setCompnameEditeded] = useState(product?.company?.name || '')
    const [compcpEditeded, setcompcpEditeded] = useState(product?.company?.catchPhrase || '')
    const [compbsEditeded, setCompbsEditeded] = useState(product?.company?.bs || '')

    return (
        <div className="editproduct">
            <div className="editheading">
                <h4>EDIT YOUR DATA HERE</h4>
            </div>
            <div className="textfeild">
                <div className="nametitle">
                    <h5>NAME DETAILS :</h5>
                </div>
                <div className="namefeild">
                    <TextField
                        required
                        id="Name"
                        label="Name"
                        value={nameEditeded}
                        onChange={(e) => setNameEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="UserName"
                        label="UserName"
                        value={usernameEditeded}
                        onChange={(e) => setUsernameEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Email"
                        label="Email"
                        value={emailEditeded}
                        onChange={(e) => setEmailEditeded(e.target.value)}
                    />
                </div>
                <div className="addresstitledata">
                    <h5>ADDRESS DETAILS :</h5>
                </div>
                <div className="addressfeild">
                    <TextField
                        required
                        id="Street"
                        label="Street"
                        value={streetEditeded}
                        onChange={(e) => setStreetEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Suite"
                        label="Suite"
                        value={suiteEditeded}
                        onChange={(e) => setSuiteEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="City"
                        label="City"
                        value={cityEditeded}
                        onChange={(e) => setCityEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Zipcode"
                        label="Zipcode"
                        value={zipcodeEditeded}
                        onChange={(e) => setZipcodeEdited(e.target.value)}
                    />

                    <TextField
                        required
                        id="Lattitude"
                        label="Lattitude"
                        value={latEditeded}
                        onChange={(e) => setLatEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Longitude"
                        label="Longitude"
                        value={lngEditeded}
                        onChange={(e) => setLngEditeded(e.target.value)}
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
                        value={phoneEditeded}
                        onChange={(e) => setPoneEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Website"
                        label="Website"
                        value={webEditeded}
                        onChange={(e) => setWebEditeded(e.target.value)}
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
                        value={compnameEditeded}
                        onChange={(e) => setCompnameEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="CatchPhrase"
                        label="CatchPhrase"
                        value={compcpEditeded}
                        onChange={(e) => setcompcpEditeded(e.target.value)}
                    />

                    <TextField
                        required
                        id="Bs"
                        label="Bs"
                        value={compbsEditeded}
                        onChange={(e) => setCompbsEditeded(e.target.value)}
                    />
                </div>
                <div className="btn">
                    <button onClick={() => editProduct(prodid, nameEditeded, usernameEditeded, emailEditeded, streetEditeded, suiteEditeded, cityEditeded, zipcodeEditeded, latEditeded, lngEditeded, phoneEditeded, webEditeded, compbsEditeded, compcpEditeded, compnameEditeded)} >SAVE</button>
                </div>
            </div>
        </div>
    )
}