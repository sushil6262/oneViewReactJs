import React, { Component } from 'react';
import './parent.css';
import Logo from '../../images/GXTokenLogo.png';
import MetaMask from '../../images/metamask.c879a582.svg'
import Ethereum from '../../images/ethe.svg'
import Bitcoin from '../../images/bitcoin.svg'
import Stripe from '../../images/credit-cards.svg'
import QrCode from '../../images/qrcode.svg'
import Nvest from '../../images/NVEST.svg'

const ReactCopyButtonWrapper = require('../../../node_modules/react-copy-button-wrapper')


class Parent extends Component {
    state = {
        firstLayoutAnimation: true,
        secoundLayoutAnimation: true,
        thirdLayoutAnimation: true,
        fourthLayoutAnimation: true,
        fifthLayoutAnimation: true,
        sixthLayoutAnimation: true,
        copyText:true
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
    copyText=()=>{
        this.setState({
            copyText:false
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
                        <div className="col-md-4 tokenValueHide">
                            <div className="row customRow">
                                <div className="col-md-9 col-lg-10 col-xl-8 customBlue">
                                    <div className="blueBox">
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Name </strong></p>
                                            <p className="Custompara">Global Exchange</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Symbol</strong></p>
                                            <p className="Custompara">GXT</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Total Supply</strong></p>
                                            <p className="Custompara">350000000</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Phase Name</strong></p>
                                            <p className="Custompara">GXT Phase 1</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Phase Supply</strong></p>
                                            <p className="Custompara">100000000</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Phase Price</strong></p>
                                            <p className="Custompara">0.0006 ETH</p>
                                            <hr className="custmHR" />
                                        </div>
                                        <div className="tokenBx">
                                            <p className="Customtitle"><strong>Token Sold</strong></p>
                                            <p className="Custompara">1360 / 100000000</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-4">
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="row customRow mobileDisplay">
                            <div>
                                <div className="DRcell">
                                    <div className="col-xs-4">
                                        <p className="DRtext companyTextColor">Token Phase Supply</p>
                                        <p className="DRNUmber">100000000</p>
                                    </div>
                                </div>
                                <div className="DRcell">
                                    <div className="col-xs-4">
                                        <p className="DRtext companyTextColor">Token Phase Price</p>
                                        <p className="DRNUmber">0.0006 ETH</p>
                                    </div>
                                </div>
                                <div className="DRcell">
                                    <div className="col-xs-4">
                                        <p className="DRtext companyTextColor">Token Sold</p>
                                        <p className="DRNUmber">1360 / 100000000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ height: "40px" }}>
                        <div className="col"></div>
                    </div>
                    <div className="">
                        <div className="customDownNavigation" onClick={this.firstLayoutAnimation}>
                            <p className="custumPara companyTextColor">Click To Proceed</p>
                            <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                        </div>
                    </div>

                </div>
                <div className={this.state.secoundLayoutAnimation ? "secondLayout" : "secondLayoutAnimation"}><img src={Logo}
                    className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 1</h1>
                        <form>
                            <div className="form-group"><p className="companyTextColor textCenter">How Many GXTokens Would You Like To Purchase?                            &nbsp; &nbsp; &nbsp; &nbsp;
                                    <br /></p><input className="form-control" type="text"
                                    placeholder="Enter Number of Tokens" /></div>
                        </form>
                        <p>Total Price (ETH) : </p>
                        <p>Total Price ($) : </p>
                        <div className="row" style={{ height: "40px" }}>
                            <div className="col"></div>
                        </div>
                        <div className="">
                            <div className="customDownNavigation" onClick={this.secoundLayoutAnimation}>
                                <p className="custumPara companyTextColor">Click To Proceed with Payment</p>
                                <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={this.state.thirdLayoutAnimation ? "ThirdLayout" : "ThirdLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 2</h1>
                        <p className="Customtext2 companyTextColor">How Do You Want To Pay?<br /></p>
                        <div className="container" style={{ marginTop: "-40px" }}>
                            <div className="card-group">
                                <div className="card customCard displayHide" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
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
                                <div className="card customCard displayHide" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={Nvest} alt="Nvest" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">NvestBank</h4>
                                    </div>
                                </div>
                                <div className="card customCard" onClick={this.thirdLayoutAnimation}><img className="card-img-top w-100 d-block paymentImg"
                                    src={Stripe} alt="Credit Card" />
                                    <div className="card-body cardBody">
                                        <h4 className="card-title Customtext">Credit Card</h4>
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
                            <div className="form-group"><p className="companyTextColor textCenter">Where Should We Send The GXT?
                           <br /></p><input className="form-control" type="text"
                                    placeholder="Enter An ERC20 Compatible Address" /></div>
                        </form>
                        <div className="row" style={{ height: "40px" }}>
                            <div className="col"></div>
                        </div>
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.fourthLayoutAnimation}>Click To Proceed</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.fifthLayoutAnimation ? "fifthLayout" : "fifthLayoutAnimation"}><img src={Logo} className="imglogo" alt="logo" />
                    <div className="inputContent">
                        <h1 className="companyTextColor companyTextFontWeight">Step: 4</h1>
                        <p className="companyTextColor textCenter">Send (dyname value should be here)Ethereum To This Address</p>
                        <div  onClick={this.copyText}>
                        <ReactCopyButtonWrapper text="0xa969c1D98e4754Eff010A6daE217dC5c4a9c24aA">
                            <p className="tokenValuestyle textJumble hint--bottom" aria-label={this.state.copyText?"Click to Copy":"Copied"}>0xa969c1D98e4754Eff010A6daE217dC5c4a9c24aA</p>
                            
                        </ReactCopyButtonWrapper>
                        </div>
                        <img src={QrCode} className="orcode" alt="logo" />
                        <div className="row" style={{ height: "40px" }}>
                            <div className="col"></div>
                        </div>
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.fifthLayoutAnimation}>Click To Proceed</p>
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
                            <div className="form-group"><p className="companyTextColor textCenter">Help Us Validate Your Purchase
                                    <br /></p><input className="form-control" type="text"
                                    placeholder="Enter the txnHASH" /></div>
                        </form>
                        <div className="row" style={{ height: "40px" }}>
                            <div className="col"></div>
                        </div>
                        <div className="row customRow">
                            <div className="col" style={{ padding: "0" }}>
                                <div className="customDownNavigation">
                                    <p className="custumPara companyTextColor" onClick={this.sixthLayoutAnimation}>Click To Proceed</p>
                                    <p className="custumPara"><i className="fas fa-arrow-down companyTextColor"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sixthLayout"><img src={Logo} className="imglogo" alt="logo" href="#homePage" onClick={this.allAnimation} />
                    <div className="inputContent">
                        <h1 className="companyTextColor thankyou">Thank you</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Parent;
