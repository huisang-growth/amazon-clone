import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import BasketItem from "./BasketItem";

const Checkout = () => {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD-10716_PrimeMemberDealsPage/LandingPageBanners_AVD10716_PrimeMemberDealsPageRedesign_1500x200_Header.jpg"
					alt=""
				/>

				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					<BasketItem />
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
};

export default Checkout;
