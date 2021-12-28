import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import{ useParams, Redirect, useHistory} from 'react-router-dom'
import { getShelves } from  '../../store/shelf'

export default function AddToShelfForm(){
    const {sheldId} = useParams()
    const sessionUser = useSelector((state => state.session.user))
    const [option, setOption] = useState([0])
    const [error, setErrors] = useState([])
    const history = useHistory()
    const allShelf = useSelector((state => state.shelves))

    const shelfList = allShelf?.map((shelf, index) =>
        <select key={index}>
            <option value={shelf.title}>{shelf.title}</option>
        </select>
    )

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     setErrors([])
    //     const shelf = await dispatch(putShelf(shelfId, title)).catch(async (res) => {
    //         const data = await res.json()
    //         if (data && data.errors) {
    //             const filteredErrors = data.errors.filter(
    //               (error) => error !== 'Invalid value'
    //             );
    //             setErrors(filteredErrors);
    //           }
    //     })
    //     if(shelf) {
    //         return history.push(`/media`)
    //     }
    //   }

    return(
        <div>Add{shelfList}</div>
    )
}
