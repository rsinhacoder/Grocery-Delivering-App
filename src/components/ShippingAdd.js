// import React,{useState,useEffect,useContext} from 'react'
// // import {FlexRow,LightParagraph,Border ,RawLink,Card} from '../../../Style/global'
// // /** @jsx jsx */
// import { jsx, css } from '@emotion/core'
// import {CartContext} from '../../../Context/CartProvider'
// import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'

// const CheckoutPayment=(props)=> {
//     const {method}=props
//     const [productsToProcces, setproductsToProcces] = useState([])
//     const {cart} = useContext(CartContext)


//     useEffect(() => {
//          setproductsToProcces(cart.map(item=>({ title:item.itemName, price:item.itemPrice, quantity:item.quantity, images:item.images})))
//     }, [])


//     const handelToken=async(token)=>{
//         // try {
//         //     const stripeResponse =await  axios.post('http://localhost:3000/stripe/checkout',{
//         //         token,
//         //         product:{
//         //           products:products.map(p=>p.title),
//         //           amount:products.map(item=>item.price * item.quantity).reduce((a, b)=> a + b , 0)*100
//         //         }
//         //     })
//         // } catch (error) {
//         //     console.log(error)
//         // }
       
//     }

//     return (
//         <div>
//             <Card >
//                <FlexRow no100={true} justify="space-between" css={css`padding:1rem;`}  >
//                   <LightParagraph size={.8} mgb={0} css={css`width:100px;`}>Contact</LightParagraph>
//                   <LightParagraph size={.8} mgb={0}>sad_fatah@outlook.com</LightParagraph>
//                   <RawLink to="checkout/information" >Change</RawLink>
//                </FlexRow>

//                <Border css={css`margin-bottom:0;`} />
//                <FlexRow no100={true} justify="space-between" css={css`padding:1rem;`}  >
//                     <LightParagraph size={.8} mgb={0} css={css`width:100px;`}>Contact</LightParagraph>
//                     <LightParagraph size={.8} mgb={0}>ASKJALKSLASA, ASASA, 4500 OUARZAZATE , Morocco</LightParagraph>
//                     <RawLink to="checkout/information" >Change</RawLink>
//                </FlexRow>

//                <Border css={css`margin-bottom:0;`} />
//                <FlexRow no100={true} justify="space-between"  css={css`padding:1rem;`} >
//                     <LightParagraph size={.8} mgb={0} css={css`width:100px;`} >Method</LightParagraph>
//                     <LightParagraph size={.8} mgb={0} >
//                          {method || 'DHL Express '} 
//                          <span   css={css`${styles.bill__total};${styles.smallMoney}`}>$100.37</span>
//                     </LightParagraph>
//                     <RawLink to="checkout/information" >Change</RawLink>
//                </FlexRow>
//             </Card>

//             <FlexRow >
//                <RawLink to="/checkout/information" size={1}><i className="fas fa-angle-left iconeB"></i> Return to shipping</RawLink>
//                <StripeCheckout 
//                  stripeKey='pk_test_51HCsVhLkAIHmcekiVfb5aSOF75eJPLKwn7MhbxmQKMVtJrworoCsyNL8Otxs0cdcFYjKMpjejHzChey00DlIkW8b007nxn9KYC'
//                  token={handelToken}
//                  billingAddress
//                  shippingAddress
//                  amount={productsToProcces.map(item=>item.price * item.quantity).reduce((a, b)=> a + b , 0)*100}
//                />   
//            </FlexRow>
//         </div>
//     )
// }

// const styles ={
//     smallMoney :css` 
//     font-size: .9rem;
//     color: var(--colorGreyDark);
//     `,
//     bill__total :css` 
//     font-weight: 600;
//     `,
// }

// export default CheckoutPayment
