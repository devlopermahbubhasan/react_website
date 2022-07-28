import React from 'react';
import app from './img/avatar_hat.jpg'



const Service = () => {
    return (
        <>
        <div className='my-5'>
            <h1 className='text-center'>Our Service</h1>
        </div>
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row gy-4'>
                        
                    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">web</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">App</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">android</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">digital</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">marketing</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <img src={app} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">software</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

</div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Service;