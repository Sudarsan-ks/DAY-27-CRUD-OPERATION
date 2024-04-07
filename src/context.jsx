import axios from "axios";
import React, { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { API } from "./api";
import { useNavigate } from "react-router-dom";

//In this project I have created a form which can do CRUD operatin. In this you can add your data, delete it, alter it, and read it.

//To create to context api we need to declare a name of the context.
export const ProductContext = createContext();

//Creat a function which return contextname.Provider to declare all your needed function inside the function.
export const ProductProvider = ({ children }) => {

    const navigate = useNavigate()
    const [product, setProduct] = useState([])
    const [onstyle, setOnstyle] = useState(false)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [street, setStreet] = useState("")
    const [suite, setSuite] = useState("")
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    const [phone, setphone] = useState("")
    const [website, setWebsite] = useState("")
    const [compname, setCompname] = useState("")
    const [compcp, setcompcp] = useState("")
    const [compbs, setCompbs] = useState("")
    const [warn, setWarn] = useState(false)

//It is to handle when we change the path in the navbar it underline the path with red color for our identification for, Which is our current path state.
    const handlestyle = {
        borderBottom: onstyle ? 'solid 3px red' : 'none'
    }

//This is the main function which I have using async for fast and to get data asyncronously and Im using try catch to aviod uncaugth erroe popup.
    const getProduct = async () => {

        // This will fetch the api and get data and update it to setProduct to show on the UI Screen.
        try {
            const data = await axios.get(`${API}`)
            setProduct(data.data)
        }
        catch (error) {
            console.error("Error message", error)
        }

    }

    //Using useEffect in fetching can help us to avoid unnecessary fetching
    useEffect(() => {
        getProduct()
    }, [])

    //This function navigate you to edit screen where you can edit your data and make change.
    const handleedit = (itemid) => {
        navigate(`/edit/${itemid}`)
    }

    //This function delete the data from the screen and in Mockapi also you cannot retrieve data again.
    const handledelete = async (itemid) => {
        await axios.delete(`${API}/${itemid}`)
        await getProduct()
    }

    //This function create a new form which contain of new data and adding it into the API.
    const addProduct = async () => {

        setWarn(true)
        setTimeout(() => {
            setWarn(false)
        }, 2000);

        const addDatas = [name, username, email, street, suite, city, zipcode, lat, lng, phone, website, compname, compcp, compbs];
        let isPresent = true;

        addDatas.forEach((field) => {
            if (field.trim() === "") {
                isPresent = false;
            }
        })
        if (isPresent) {
            const newProduct = {
                name,
                username,
                email,
                address: {
                    street,
                    suite,
                    city,
                    zipcode,
                    geo: {
                        lat,
                        lng
                    }
                },
                phone,
                website,
                company: {
                    name: compname,
                    catchPhrase: compcp,
                    bs: compbs
                }
            }
            
            //After getting data from user we adding it into old API and again call data from API.
            try {
                await axios.post(`${API}`, newProduct, {
                    headers: {
                        "content-type": "application/json"
                    }
                })
                await getProduct()
                navigate('/')
            }
            catch (error) {
                console.error("Error message in post", error)
            }
        }

    }

    //This function show the data which the user want to edit and update the data to api to make a user change.
    const editProduct = async (prodid, nameEditeded, usernameEditeded, emailEditeded, streetEditeded, suiteEditeded, cityEditeded, zipcodeEditeded, latEditeded, lngEditeded, phoneEditeded, webEditeded, compbsEditeded, compcpEditeded, compnameEditeded) => {
        const updatedproduct = {
            name: nameEditeded,
            username: usernameEditeded,
            email: emailEditeded,
            address: {
                street: streetEditeded,
                suite: suiteEditeded,
                city: cityEditeded,
                zipcode: zipcodeEditeded,
                geo: {
                    lat: latEditeded,
                    lng: lngEditeded
                }
            },
            phone: phoneEditeded,
            website: webEditeded,
            company: {
                name: compnameEditeded,
                catchPhrase: compcpEditeded,
                bs: compbsEditeded
            }
        }

        //In this we are getting edited data from the user and updted the edited things to the particular form using the unique ID.
        try {
            await axios.put(`${API}/${prodid}`, updatedproduct)
            await getProduct()
            navigate('/')

        }
        catch (error) {
            console.error("Error message in post", error)
        }
    }




    return (
        <ProductContext.Provider value={{ product, handlestyle, setOnstyle, handleedit, handledelete, addProduct, editProduct, warn, setName, setUsername, setEmail, setStreet, setSuite, setCity, setZipcode, setLat, setLng, setphone, setWebsite, setCompname, setcompcp, setCompbs }}>
            {children}
        </ProductContext.Provider>

    )
}