<template>
	<div>
		<div class="mb-3">
			<div class="d-flex align-items-baseline flex-wrap mb-3">
				<p class="me-3 mb-2 mb-lg-0">CHOOSE THE CATEGORY YOU WANT:</p>
				<select class="form-select border shadow-none text-center" v-model="index" style="width:200px">
					<option :value="i" v-text="table.name" v-for="(table, i) in tables[active]"></option>
				</select>
			</div>
			<div class="d-flex justify-content-start justify-content-lg-end mb-3">
				<div>
					<div class="form-check form-check-inline">
						<input type="radio" class="form-check-input" id="cm" value="cm" v-model="active">
						<label class="form-check-label" for="cm">in cm</label>
					</div>
					<div class="form-check form-check-inline">
						<input type="radio" class="form-check-input" id="in" value="in" v-model="active">
						<label class="form-check-label" for="in">in inches</label>
					</div>
				</div>
			</div>
			<div>
				<img :src="tables[active][index].url" class="d-block w-100" />
			</div>
		</div>
		<div>
			<p>In order to select the correct clothing size, we recommend you take the following measurements using a soft tape measure.</p>
			<div class="row">
				<div class="col-md-3 col-lg-2">
					<img src="/img/size/human-front.png" class="d-block w-100" />
				</div>
				<div class="col-md-6 col-lg-8">
					<p>
						<b>1. BUST:</b>
						Place the measuring tape under the arm and measure the fullest part of your bust keeping the tape straight and taut.
					</p>
					<p>
						<b>2. WAIST:</b>
						Measure the narrowest part of your natural waistline.
					</p>
					<p>
						<b>3. HIPS:</b>
						Stand with feet together. The hip should be measured around its fullest part. The measuring tape should brush across both hipbones.
					</p>
					<p>
						<b>4. SHOULDER WIDTH:</b>
						From the edge of your shoulder socket measure all the way over the same point on the other shoulder along the back.
					</p>
					<p>
						<b>5. SLEEVE LENGTH:</b>
						Measure from your shoulder socket to your wrist arm bent.
					</p>
				</div>
				<div class="col-md-3 col-lg-2">
					<img src="/img/size/human-front.png" class="d-block w-100" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			//
		},
		data() {
			return {
				active: 'cm',
				index: 0,
				tables: {
					cm: [
						{name: 'COATS', url: '/img/size/COAT-CM.png'},
						{name: 'JACKETS', url: '/img/size/JACKET-CM.png'},
						{name: 'SHIRTS', url: '/img/size/SHIRTS-CM.png'},
						{name: 'TOPS', url: '/img/size/TOPS-CM.png'},
						{name: 'PANTS & SHORTS', url: '/img/size/PANT_SKIRTS-CM.png'},
						{name: 'SKIRTS', url: '/img/size/PANT_SKIRTS-CM.png'},
						{name: 'DRESSES', url: '/img/size/DRESS-CM.png'},
					],
					in: [
						{name: 'COATS', url: '/img/size/COAT-INCHES.png'},
						{name: 'JACKETS', url: '/img/size/JACKETS-INCHES.png'},
						{name: 'SHIRTS', url: '/img/size/SHIRTS-INCHES.png'},
						{name: 'TOPS', url: '/img/size/TOPS-INCHES.png'},
						{name: 'PANTS & SHORTS', url: '/img/size/PANT_SKIRTS-INCHES.png'},
						{name: 'SKIRTS', url: '/img/size/PANT_SKIRTS-INCHES.png'},
						{name: 'DRESSES', url: '/img/size/DRESS-INCHES.png'},
					]
				}
			}
		}
	}
</script>
