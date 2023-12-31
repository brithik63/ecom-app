import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import watch from '../images/watch.jpg'
import Container from '../components/Container';

const Checkout = () => {
    return (<>
        <Meta title={'Checkout'} />
        <BreadCrumb title="Checkout" />
        <Container class1="checkout-wrapper home-wrapper-2 py-2">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-data">
                            <h3 className="website-name">Dev Corner</h3>
                            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link className='text-dark total-price' to='/cart'>Cart</Link>
                                    </li>
                                 &nbsp;/&nbsp;
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Information
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active">
                                        Shipping
                                    </li>
                                    &nbsp; /
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <h4 className="title total">
                                Contact Informaion
                            </h4>
                            <p className="user-details total">
                                Britik Anthal (britikanthal2@gamil.com)
                            </p>
                            <h4 className="mb-3">Shipping Address</h4>
                            <form action="" className='d-flex gap-15 justify-content-between flex-wrap'>
                                <div className='w-100'>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="" sleceted disabled>
                                            Selected Country
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='First Name' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Last Name' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Address' className="form-control" />
                                </div>
                                <div className='w-100'>
                                    <input type="text" placeholder='Apartment, Suite,etc' className="form-control" />
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='city' className="form-control" />

                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="" selectd disabled>Select State</option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='zipCode' className="form-control" />
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack className='me-2' />
                                            Return to Cart
                                        </Link>
                                        <Link to='/cart' className='button' >Continue to Shipping</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className='border-bottom py-4'>
                            <div className="d-flex mb-2 gap-10 align-items-center">
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ top: "-10px", right: "2px" }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                        <img className='img-fluid' src={watch} alt="product" />
                                    </div>
                                    <div>
                                        <h5 className="total-price">fj@fj</h5>
                                        <p className='total-price'>s / abfjgl</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className='border-bottom py-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p>Subtotal</p>
                                <p>$ 1000</p>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ 1000</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ 1000</h5>
                        </div>
                    </div>
                </div>
        </Container>
    </>)
}

export default Checkout