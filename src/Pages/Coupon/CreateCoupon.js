import React, { Component } from 'react';
import Navbars from './../../Components/Navbar/navbar';
import Footer from './../../Layouts/Footer/footer';

import '../Coupon/CouponStyles/couponStyles.css'

class CreateCoupon extends Component {
    state = {
        coupon: {
            title: '',
            token: '',
            discount: '',
            minTotal: '',
            expireDate: ''
        }
    }


    handleCreateCoupon = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <Navbars />
                </div>
                <div className='writeMessageBox'>
                    <div className='writeMessageBoxHeader'>
                        <>Create Coupon</>
                    </div>

                    <form onSubmit={this.handleCreateCoupon}>
                        <div className="coupon-form-group">
                            <label htmlFor="title">Title</label>
                            <input type="string" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title"></input>
                            <br />
                        </div>
                        <div className="coupon-form-group">
                            <label htmlFor="token">Token</label>
                            <input type="string" className="form-control" id="token" placeholder="Enter token"></input>
                            <br />
                        </div>
                        <div className="coupon-form-group">
                            <label htmlFor="discount">Discount</label>
                            <input type="string" className="form-control" id="discount" placeholder="Enter discount"></input>
                            <br />
                        </div>
                        <div className="coupon-form-group">
                            <label htmlFor="minTotal">Minimum Total</label>
                            <input type="string" className="form-control" id="minTotal" placeholder="Enter minimum total"></input>
                            <br />
                        </div>
                        <div className="coupon-form-group">
                            <label htmlFor="expireOn">Expire On</label>
                            <input type="string" className="form-control" id="expireOn" placeholder="Enter expire date"></input>
                            <br />
                        </div>
                        <button
                            onClick={() => this.handleSendMessage}
                            type="submit" className="btn btn sendCouponButton">Create Coupon</button>
                    </form>
                </div>
                <div>
                    <Footer />
                </div>
            </div>



        );
    }
}

export default CreateCoupon;