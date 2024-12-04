import Stripe from "stripe";
import { version } from "../../package.json";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: "2024-11-20.acacia",
	appInfo: {
		name: "Ignite Shop",
		version,
	},
});
