import React, { Component } from 'react';
import './parent.css';
import Logo from '../../images/GXTokenLogo.png';
import MetaMask from '../../images/metamask.c879a582.svg'
import Ethereum from '../../images/ethe.svg'
import Bitcoin from '../../images/bitcoin.svg'
import Stripe from '../../images/stripe.svg'
import QrCode from '../../images/qrcode.svg'


class Parent extends Component {
    state = {
        firstLayoutAnimation: true,
        secoundLayoutAnimation: true,
        thirdLayoutAnimation: true,
        fourthLayoutAnimation: true,
        fifthLayoutAnimation: true,
        sixthLayoutAnimation: true,
    }
    firstLayoutAnimation = () => {
        this.setState({
            firstLayoutAnimation: !this.state.firstLayoutAnimation
        })
    }
    secoundLayoutAnimation = () => {
        this.setState({
            secoundLayoutAnimation: !this.state.secoundLayoutAnimation
        })
    }
    thirdLayoutAnimation = () => {
        this.setState({
            thirdLayoutAnimation: !this.state.thirdLayoutAnimation
        })
    }
    fourthLayoutAnimation = () => {
        this.setState({
            fourthLayoutAnimation: !this.state.fourthLayoutAnimation
        })
    }
    fifthLayoutAnimation = () => {
        this.setState({
            fifthLayoutAnimation: !this.state.fifthLayoutAnimation
        })
    }
    sixthLayoutAnimation = () => {
        this.setState({
            sixthLayoutAnimation: !this.state.sixthLayoutAnimation
        })
    }
    allAnimation = () => {
        this.setState({
            firstLayoutAnimation: !this.state.firstLayoutAnimation,
            secoundLayoutAnimation: !this.state.secoundLayoutAnimation,
            thirdLayoutAnimation: !this.state.thirdLayoutAnimation,
            fourthLayoutAnimation: !this.state.fourthLayoutAnimation,
            fifthLayoutAnimation: !this.state.fifthLayoutAnimation,
            sixthLayoutAnimation: !this.state.sixthLayoutAnimation

        })
    }

    render() {
        return (
            <div>
                <div id="homePage" className={this.state.firstLayoutAnimation ? "firstLayout" : "firstLayoutAnimation"}>
                    <div className="row customRow">
                        <div className="col-md-8">
                            <img src={Logo} className="img-fluid customLogo" alt="logo" />
                            <p className="heading1st companyTextColor">Introducing GXToken<br /></p>
                            <p className="heading2nd companyTextColor">Your Passport To The Global X Change<br /></p>

                        </div>
                        <div className="col-md-4">
                            <div className="row customRow">
                                <div className="col-md-9 col-lg-10 col-xl-8 customBlue">
                                    <div className="blueBox">
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-4">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="customDownNavigation" onClick={this.firstLayoutAnimation}>
                            <p className="custumPara companyTextColor">Click to Proceed</p>
                            <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                        </div>
                    </div>

                </div>
                <div className={this.state.secoundLayoutAnimation ? "secondLayout" : "secondLayoutAnimation"}><img src={Logo}
                    className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 1</h1>
                        <form>
                            <div className="form-group"><label className="companyTextColor">Your Passport To The Global X change &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;<br /></label><input className="form-control" type="text"
                                    placeholder="Enter Number of Token" /></div>
                        </form>
                        <p>Total Price : </p>
                        
                        <div className="">
                                <div className="customDownNavigation" onClick={this.secoundLayoutAnimation}>
                                    <p className="custumPara companyTextColor">CLick to Proceed with Payment</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className={this.state.thirdLayoutAnimation ? "ThirdLayout" : "ThirdLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 2</h1>
                        <p className="Customtext2 companyTextColor">Payment Gateway ( Buy token using )<br /></p>
                        <div className="container" style={{ marginTop: "-40px" }}>
                            <div className="card-group">
                                <div className="card customCard" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={MetaMask} alt="Metamask" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">Metamask</h4>
                                    </div>
                                </div>
                                <div className="card customCard" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={Ethereum} alt="Ethereum" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">Ethereum</h4>
                                    </div>
                                </div>
                                <div className="card customCard" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={Bitcoin} alt="Bitcoin" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">Bitcoin</h4>
                                    </div>
                                </div>
                                <div className="card customCard" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={Stripe} alt="Stripe" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">Stripe</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.fourthLayoutAnimation ? "fourthLayout" : "fourthLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 3</h1>
                        <form>
                            <div className="form-group"><label className="companyTextColor">Where Should We Send The GXT? &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;<br /></label><input className="form-control" type="text"
                                    placeholder="Enter the ERC20 compatible Ethereum Account address for receiving tokens" /></div>
                        </form>
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.fourthLayoutAnimation}>Click to proceed</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.fifthLayoutAnimation ? "fifthLayout" : "fifthLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 4</h1>
                        <p className="companyTextColor">Payment Address</p>
                        <p className="tokenValuestyle">0xa969c1D98e4754Eff010A6daE217dC5c4a9c24aA</p><img src={QrCode} className="orcode" alt="logo" />
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.fifthLayoutAnimation}>Click to proceed</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.sixthLayoutAnimation ? "sixthLayout" : "sixthLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 5</h1>
                        <form>
                            <div className="form-group"><label className="companyTextColor">Help Us Validate Your Purchase &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp;<br /></label><input className="form-control" type="text"
                                    placeholder="Enter the txnHASH" /></div>
                        </form>
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.sixthLayoutAnimation}>Click to proceed</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sixthLayout"><img src={Logo} className="imglogo" alt="logo" href="#homePage" onClick={this.allAnimation} />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Thank you</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Parent;
