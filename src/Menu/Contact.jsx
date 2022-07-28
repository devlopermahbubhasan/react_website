import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [data, setdata] = useState({
        fullname : "",
        phone : "",
        email : "",
        msg : "",
    }) 
    const inputEvent = (event) =>{
        const {name , value} = event.target;
        setdata ((preVal) =>{
            return {
                ...preVal,
                [name] : value,
            };
        });
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My Name Is ${data.fullname}. My Numuber is ${data.phone}. My Email Is ${data.email}. My Massge is ${data.msg}`);
    }
    return (
        <div>
            <div className='my-5'>
                    <h1 className='text-center'>Contact Us</h1>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Full Name"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"name='phone' value={data.phone} onChange={inputEvent} placeholder="Phone Number"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                            </div>
                            <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Massge</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={inputEvent} placeholder='Type your Massge' rows="3"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;