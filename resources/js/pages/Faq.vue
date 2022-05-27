<template>
	<AppLayout>
		<h title="Faq"></h>
		<div class="modal fade" id="sizeModal" tabindex="-1">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">AFYLA SIZE</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<FindSize></FindSize>
					</div>
				</div>
			</div>
		</div>
		<section class="bg-primary p-3 p-sm-5">
			<h1 class="fs-4 mb-4">FAQ</h1>
			<div class="row">
				<div class="col-sm-4 col-lg-3 pb-5 pb-sm-0">
					<ul class="nav flex-column">
						<li>
							<a href="#" class="active" data-bs-toggle="tab" data-bs-target="#orders">Orders & pre-order</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#returns">Returns</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#shopping">Shopping</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#size">Find your size</a>
						</li>
						<li>
							<a href="#" data-bs-toggle="tab" data-bs-target="#shipping">Shipping</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#payment">Payment</a>
						</li>
						<li class="mb-3">
							<a href="#" data-bs-toggle="tab" data-bs-target="#account">My account</a>
						</li>
						<li>
							<l :href="route('contact')">Contact Us</l>
						</li>
					</ul>
				</div>
				<div class="col-sm-8 col-lg-9">
					<div class="tab-content" id="nav-tabContent">

						<div class="tab-pane fade show active" id="orders">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How do I know that my order is accepted by AFYLA ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Once you made an order, a confirmation mail will be sent to you. Check your mailbox and you can <l :href="route('contact')">Contact Us</l> for any additional information.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Why can’t I complete my order ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>If you notice any technical problem, you can <l :href="route('contact')">Contact Us</l> and we will provide for you a shopping assistant. Until an order is concluded, items added to your Bag remain available on the website and can therefore be purchased by other customers. If this should happen before you complete your order, the item might be not available anymore.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I cancel of modify or add an item to my order ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can cancel your order anytime before shipping. But once an order has been confirmed and held for shipment, it is processed automatically and cannot be canceled.</p>
											<p>The package can be returned as indicated in our <l :href="route('page', 'shipping-returns-policy')">Shipping & Returns Policy</l>.</p>
											<p>Unfortunately you cannot add a new item to an order already purchased. Each order is processed automatically and once it has been confirmed, it is not possible to modify the details. To purchase additional items, you must place a new order.</p>
											<p>You can modify the size of an item only if the order is not held to shipment yet.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I follow my order ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can check the status of your order at any time on the Follow your order page.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I didn’t receive any order confirmation in more than 24 hours, what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Check your spam folder and make sure that <a :href="'mailto:'+settings.email" v-text="settings.email"></a> is in the safe senders list of your email account.</p>
											<p>This will prevent the anti-spam filter from blocking future communications.</p>
											<p>If this doesn't work please <l :href="route('contact')">Contact Us</l> as there may be errors with the email address you registered with.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How do promotional codes work ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Promotional Codes allow you to enjoy exclusive initiatives and promotions. If you are signed up for our newsletter, you will receive regular Promotional Codes for all active promotions. The code can only be used on one order. You can enter it on the promotional code section on the Checkout. If the code doesn’t work, check the date and validity, as well as which items and categories the newsletter received says are covered by the promotion.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; What is a pre-order and how does it work ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>AFYLA gives you the opportunity to pre-order a selection of products before their launching day, if they are sold out, or any articles for which a pre-order is possible on the website. Your order will be shipped when ready. You’ll be charged only when the product is ready and shipped. Once your order will be shipped, we will send you an email with the tracking number of the package and all the products details.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="returns">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I return a product I purchased ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Please follow these four steps:</p>
											<p>1. Contact us: Our team of advisors will assist you on the return by offering a complete service or pick up by the courier company's. They will also provide the documents needed by email. Contact us by choosing the subject “Returns”. You can also email or call us.</p>
											<p>2. Complete the questions in the form: You will receive a “Return form” with questions on it. You should complete them and include the form in the packaging.</p>
											<p>3. Prepare the packaging: Including the return form completed and with the documents requested by our advisors team.</p>
											<p>4. Give the package to the courier: We will contact the courier to schedule a pickup and shipment of your return or We can hand you the courier’s contact an arrange a pick up that will suit you better. Or You can drop the package off at Our carrier shipping location. All returns shipped using the prepaid shipping label is complimentary.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I exchange or return an item gifted to me by someone else ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Yes, you can exchange or return an item gifted only within 15 days from receiving the order. You make sure that the item is in the same condition as sent, with its invoice, labeling and packaging. Then, you can <l :href="route('contact')">Contact Us</l> to complete the return process.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How many days to return a product ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You may exchange the items purchased from <l href="/" v-text="route('home')"></l> within 15 days of receipt of your purchase. AFYLA will cover the shipping costs to our warehouse and you main free of charge.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I follow my return ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can check the status of your order at any time on the Follow your return page.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I didn’t receive any return confirmation in more than 24 hours, what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Check your spam folder and make sure that <a :href="'mailto:'+settings.email" v-text="settings.email"></a> is in the safe senders list of your email account. This will prevent the anti-spam filter from blocking future communications. If this doesn't work please <l :href="route('contact')">Contact Us</l> as there may be errors with the email address you registered with.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; When do I receive my refund ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Once the parcel arrives at our warehouse, it will be checked by our quality control team. After approval AFYLA will refund the amount paid to the card which you made the payment, This process may take up to 15 days. Read more in our <l :href="route('page', 'shipping-returns-policy')">Shipping & Returns Policy</l>.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; When the article is not accepted for return ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>The returned item should be in the same condition as sent by AFYLA. Please make sure to keep all the labelings, the packaging and everything sent with it until you are completely sure that you won’t return it.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I decided to keep my order, but I have already completed the return form. What should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>We are glad you have decided to keep your purchase. If the return is already shipped, please <l :href="route('contact')">Contact Us</l> to provide with required help. If not, there is no need to contact us.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I combine returns form different orders ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Unfortunately no, we use a return form for each order. So if you want to return items from the different orders, you need to fill out multiple return forms.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Where is my return ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>If you want to track your return, you can use the tracking number received by mail. Once we receive the returned item, we will inform you and keep you updated during the process of examination and when refunded.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I lost my return form what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Dont worry, just <l :href="route('contact')">Contact Us</l> and we will provide you with the help needed</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I lost my invoice and I don’t remember my orders number, what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can <l :href="route('contact')">Contact Us</l> and we will provide you with the help needed.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="shopping">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Where can I shop ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can shop via our website’s store <l :href="route('shop')" v-text="route('shop')"></l>. Or you can shop by contacting us on our social media platforms ( <a :href="settings.instagram" target="_blank">INSTAGRAM</a>, <a :href="settings.facebook" target="_blank">Facebook</a> ), on our <a :href="'https://wa.me/'+settings.whatsapp" target="_blank">WhatsApp</a>, <a :href="settings.wechat" target="_blank">WeChat</a> or by calling us <a :href="'tel:'+settings.phone" v-text="settings.phone"></a>.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Do you offer a shopping assistance ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Yes, we have a shopping assistant service. You can <l :href="route('contact')">Contact Us</l> and we will happily assist you.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Where can I try an item before purchasing it ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>We have a “Try before you buy “ service in Paris only. You can book an appointment so we can deliver an item to your house with our assistant and you can try it even before the purchase.</p>
											<p>Unfortunately, for other countries this service is not available yet. But we do offer free returns and refunds.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Do you have any physical store ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Unfortunately no, we are completely digital.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="size">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I know my size ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can consult our <a href="#size" data-bs-toggle="modal" data-bs-target="#sizeModal">Find your size</a> page with measurements table in cm and inches for each type of garment, including different country sizes and a guide showing you how to take measurements.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I chose the size I normally wear but it didn’t fit me, what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You may exchange any item purchased from <l href="/" v-text="route('home')"></l> within 15 days of receipt of your purchase. <l :href="route('contact')">Contact Us</l> to provide you with the required assistant.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="shipping">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Which shipping options are available and what is the cost ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>We are partners with FedEx Worldwide express. And we offer free shipping.</p>
											<p>If you want to choose your own shipping method, please <l :href="route('contact')">Contact Us</l>.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I track my order ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can track your order via the FedEx Worldwide express website.</p>
											<p>If you want to choose your own shipping method, please <l :href="route('contact')">Contact Us</l>.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I modify my shipping address ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can <l :href="route('contact')">Contact Us</l> and will provide you with the help required.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; What should I do if my order hasn’t been delivered yet ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can track your order via the Tracking number you received on <a href="https://www.fedex.com" target="_blank">fedex.com</a>. You can also <l :href="route('contact')">Contact Us</l> to assist you with the help you require.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I program a delivery ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p><l :href="route('contact')">Contact Us</l> so we can assist you with help you require</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="payment">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; When will my credit card be charged ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>The full transaction value will be charged to your credit card after we have verified your card details, received credit authorization, confirmed availability and prepared your order for shipping.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Why did you charged me twice even though I only placed one order ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>It must be a technical problem. Please <l :href="route('contact')">Contact Us</l> so we can refund you immediately.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Which form of payment do you accept ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>AFYLA accepts:</p>
											<p>Credit Card: Visa, MasterCard.</p>
											<p>PayPal: Shop easily online without having to enter your credit card details on the website.</p>
											<p>Your account will be charged once the order is completed.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Who pays the customs duties ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>The prices of products are expressed in U.S. dollars inclusive of taxes and duties for Europe, U.S., Morocco and UAE. Our delivery costs are flat and there are no extra costs at delivery.</p>
											<p>For other parts of the world, the prices of products are expressed in U.S. dollars inclusive of taxes, but all applicable duties shall be borne by the customer. Unfortunately We cannot estimate how much duties You will pay but your local customs should be able to estimate the price.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="tab-pane fade" id="account">
							<div class="accordion">
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I create an account on AFYLA ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can create an account by clicking on the login icon on the header of our website. Once you entered your information, your account will be automatically created.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I delete my account ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can <l :href="route('contact')">Contact Us</l>, and we will delete it for you. We remind you that your account hold all your information, order history and whatever you save to your wishlist. By deleting your account, all of these information will be destroyed.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; Can I trust entering my password ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>The password you enter for your account is registered in our database in an encrypted form. Even AFYLA team, won’t be able to access to your account and will never know your password.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I cannot log to my account ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>If our website does not recognize your email address or password, verify the data you entered. If you forgot your password, click the "Forgot your password?" link on the Login page and follow the procedure to change it. For further assistance, <l :href="route('contact')">Contact Us</l>, we will be happy to assist you.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; I don’t receive your Newsletter, what should I do ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>Make sure that you are subscribed to our newsletter. In order to do that, go to the profile section of your account, and verify if the box “Unsubscribe to our newsletter” is not checked.</p>
											<p>If it is the case, then please <l :href="route('contact')">Contact Us</l> and we will immediately verify the problem and add you to the Newsletter.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I subscribe to the Newsletter ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>To subscribe to our newsletter, you can enter your mail in the “JOIN OUR COMMUNITY” pop up, or you can enter your mail in the “Newsletter” section in the footer of each page.</p>
										</div>
									</div>
								</div>
								<div class="ac">
									<div class="ac-header">
										<span class="ac-trigger">&#8226; How can I unsubscribe to the Newsletter ?</span>
									</div>
									<div class="ac-panel">
										<div class="ac-text text-muted">
											<p>You can unsubscribe to our newsletter. In order to do that, go to the profile section of your account, and check the “Unsubscribe to our newsletter” box.</p>
											<p>If you don’t have an account, <l :href="route('contact')">Contact Us</l> and we will unsubscribe you.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	</AppLayout>
</template>

<script>
	import AppLayout from '../components/AppLayout'
	import FindSize from '../components/FindSize'
	import { Head } from '@inertiajs/inertia-vue'
	import { Link } from '@inertiajs/inertia-vue'
	import Accordion from 'accordion-js'
	export default {
		components: {
			AppLayout,
			FindSize,
			h: Head,
			l: Link,
		},
		computed: {
			settings() {
				return this.$page.props.settings
			}
		},
		mounted() {
			new Accordion(Array.from(document.querySelectorAll('.accordion')), {
				duration: 200,
			})
		}
	}
</script>

<style scoped>
	a:not(.active) {
		text-decoration: underline;
	}
</style>
