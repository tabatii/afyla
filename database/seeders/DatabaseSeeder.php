<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Collection::insert([
            ['title' => 'METAMORPHOSIS WINTER 22-23', 'description' => 'Metamorphosis means change of form, nature or structure. The change is so radical that the being or the thing that is the object is no longer recognizable. AFYLA was inspired by the metamorphosis of the butterfly; a process of four stages where the butterfly transforms and changes in shape from an egg to an adult. During this transofrmation, the insect doesn’t require any external help, they build their own silk cocoon to grow in it, they rib it themselves, they extend their wings themselves. This process of self dependence made us think of a new concept. A concept of inner change and self healing. This fall winter collection is a self revolution. We reinvented tailoring into a more bold and empowering silhouette. We made items that call the inner self of a woman and challenge it to break free and be. From big shaped shoulders, oversized blazers and flared pants to draped dresses and twisted tops, our shapes are there to give power with a touch of optimism and joyful colors.', 'images' => '["collections/May2022/Sn5ZfAYehXEsDlBEMGGT.jpg","collections/May2022/xXY9t1HQ7hEx7OtAFGID.jpg","collections/May2022/uitMQTAo6uB6SZhYWvpY.jpg"]', 'video' => 'https://www.youtube.com/watch?v=04ujqYVxgc4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['title' => 'METAMORPHOSIS WINTER 22-23 (2)', 'description' => 'Metamorphosis means change of form, nature or structure. The change is so radical that the being or the thing that is the object is no longer recognizable. AFYLA was inspired by the metamorphosis of the butterfly; a process of four stages where the butterfly transforms and changes in shape from an egg to an adult. During this transofrmation, the insect doesn’t require any external help, they build their own silk cocoon to grow in it, they rib it themselves, they extend their wings themselves. This process of self dependence made us think of a new concept. A concept of inner change and self healing. This fall winter collection is a self revolution. We reinvented tailoring into a more bold and empowering silhouette. We made items that call the inner self of a woman and challenge it to break free and be. From big shaped shoulders, oversized blazers and flared pants to draped dresses and twisted tops, our shapes are there to give power with a touch of optimism and joyful colors.', 'images' => '["collections/May2022/Sn5ZfAYehXEsDlBEMGGT.jpg","collections/May2022/xXY9t1HQ7hEx7OtAFGID.jpg","collections/May2022/uitMQTAo6uB6SZhYWvpY.jpg"]', 'video' => 'https://www.youtube.com/watch?v=04ujqYVxgc4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Look::insert([
            ['collection_id' => 1, 'title' => 'LOOK 01', 'image' => 'products/April2022/94zShgjJuHLttfuNyHJv.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['collection_id' => 1, 'title' => 'LOOK 02', 'image' => 'products/April2022/94zShgjJuHLttfuNyHJv.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['collection_id' => 2, 'title' => 'LOOK 03', 'image' => 'products/April2022/94zShgjJuHLttfuNyHJv.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['collection_id' => 2, 'title' => 'LOOK 04', 'image' => 'products/April2022/94zShgjJuHLttfuNyHJv.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Category::insert([
            ['name' => 'COATS & JACKETS', 'slug' => 'coats-jackets', 'image' => 'categories\May2022\j2UnNcEM685Hqp2gH45A.png', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'SHIRTS & TOPS', 'slug' => 'shirts-tops', 'image' => 'categories\May2022\9kLRmymrnuHsfDrRDodL.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'PANTS & SHORTS', 'slug' => 'pants-shorts', 'image' => 'categories\May2022\ojc18MB69ffxIyIQYmQo.png', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'DRESSES', 'slug' => 'dresses', 'image' => 'categories\May2022\xxLDt0GoZjT0D6Fa8R0L.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'SKIRTS', 'slug' => 'skirts', 'image' => 'categories\May2022\0aHBjLJOruCFMk5O1T4O.jpg', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\SubCategory::insert([
            ['category_id' => 1, 'name' => 'COATS', 'slug' => 'coats', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 1, 'name' => 'JACKETS', 'slug' => 'jackets', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 1, 'name' => 'BLAZERS', 'slug' => 'blazers', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 2, 'name' => 'SHIRTS', 'slug' => 'shirts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 2, 'name' => 'TOPS', 'slug' => 'tops', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 2, 'name' => 'JERSEY SHIRTS', 'slug' => 'jersey-shirts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 2, 'name' => 'T-SHIRTS', 'slug' => 't-shirts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 3, 'name' => 'PANTS', 'slug' => 'pants', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 3, 'name' => 'SHORTS', 'slug' => 'shorts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 3, 'name' => 'JUMPSUIT', 'slug' => 'jumpsuit', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 4, 'name' => 'SHORT DRESSES', 'slug' => 'short-dresses', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 4, 'name' => 'LONG DRESSES', 'slug' => 'long-dresses', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 5, 'name' => 'SHORT SKIRTS', 'slug' => 'short-skirts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['category_id' => 5, 'name' => 'LONG SKIRTS', 'slug' => 'long-skirts', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Color::insert([
            ['name' => 'BROWN', 'slug' => 'brown', 'hex' => '#964B00', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'BLUE', 'slug' => 'blue', 'hex' => '#0000FF', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'PINK', 'slug' => 'pink', 'hex' => '#FFC0CB', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Size::insert([
            ['name' => '40', 'slug' => '40', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => '42', 'slug' => '42', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => '44', 'slug' => '44', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => '46', 'slug' => '46', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => '48', 'slug' => '48', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Material::insert([
            ['name' => 'WOOL', 'slug' => 'wool', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'COTTON', 'slug' => 'cotton', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'SILK', 'slug' => 'silk', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'LINEN', 'slug' => 'linen', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'ORGANIC', 'slug' => 'organic', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['name' => 'RECYCLED', 'slug' => 'recycled', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
        \App\Models\Product::insert([
            [
                'images' => '["products/April2022/94zShgjJuHLttfuNyHJv.jpg","products/April2022/u5Yaecdgy1VCsoaZ9Vr0.jpg","products/April2022/PJEM0zHwY4X7U5rkN0NR.jpg","products/April2022/EMi0HEmqi7aHoluNtTrC.jpg"]',
                'title' => 'Double-breasted masculine flannel coat',
                'sku' => 'PRODUCT1288540',
                'price' => 1899,
                'overview' => 'Timeless, elegant and empowering, the double breasted straight-cut camel coat characterized with structured exaggerated shoulders, round lapels and made of an elegant cozy flannel reflecting a unique mix of masculine and feminine blend that goes with AFYLA\'s Metamorphosis collection. This sartorial design projects a refined style relating to a love for classic and timeless garments with a nod to modernity, power and newness.',
                'description' => 'Timeless, elegant and empowering, the double breasted straight-cut camel coat characterized with structured exaggerated shoulders, round lapels and made of an elegant cozy flannel reflecting a unique mix of masculine and feminine blend that goes with AFYLA\'s Metamorphosis collection. This sartorial design projects a refined style relating to a love for classic and timeless garments with a nod to modernity, power and newness.',
                'public' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'images' => '["products/April2022/IDVtTiirDbtTktIxbi29.jpg","products/April2022/eE6YPKoPuMdDpWACwmuA.jpg","products/April2022/YgOU6djkm5dlChs9EOWV.jpg","products/April2022/7D4b53iWoKgIyHbDCLj3.jpg"]',
                'title' => 'Midnight blue draped top',
                'sku' => 'PRODUCT1288552',
                'price' => 1590,
                'overview' => 'This midnight blue flannel ensemble composed of a top and its shorts, where sleek elegant lines meet bold yet refined details such as asymmetrical cuts, sharp shoulders and round sleeves. Details that enhance the feminine silhouette with a mixture of a masculine allure. This design interprets the art of draping in a more modern, empowering and seductive way. This innovative sartorial is inspired by the braveness in the Metamorphosis process and holds a fearless energy.',
                'description' => 'This midnight blue flannel ensemble composed of a top and its shorts, where sleek elegant lines meet bold yet refined details such as asymmetrical cuts, sharp shoulders and round sleeves. Details that enhance the feminine silhouette with a mixture of a masculine allure. This design interprets the art of draping in a more modern, empowering and seductive way. This innovative sartorial is inspired by the braveness in the Metamorphosis process and holds a fearless energy.',
                'public' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'images' => '["products/April2022/joFlCpMjze6pZQv9kGId.jpg","products/April2022/sukQvA4Dvu9J1Id7WdVL.jpg","products/April2022/xC49Dikk0cNIgzW1nVvr.jpg","products/April2022/tjoQkBBdduUVE9tcpaoA.jpg"]',
                'title' => 'Rose mini wrap skirt',
                'sku' => 'PRODUCT1288542',
                'price' => 890,
                'overview' => 'Modern yet classic, the rose mini wrap skirt crafted in elegant lightweight wool, with side pleats that add a draping effect, represents a contemporary accent. While tone-in-tone pearl-fringes attached to the front hem creates a gentle and sexy movement, this design was created to show the sensual yet playful side of the woman.',
                'description' => 'Modern yet classic, the rose mini wrap skirt crafted in elegant lightweight wool, with side pleats that add a draping effect, represents a contemporary accent. While tone-in-tone pearl-fringes attached to the front hem creates a gentle and sexy movement, this design was created to show the sensual yet playful side of the woman.',
                'public' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'images' => '["products/April2022/Rw925KoaS7aLopaAy4l2.jpg","products/April2022/7lQkg6AEItGI6aZvsnhh.jpg","products/April2022/fefgWwQjFgb8bhESDfsu.jpg","products/April2022/KMg4BWPWRSpfAIj4eofs.jpg"]',
                'title' => 'Butterfly wing dress',
                'sku' => 'PRODUCT1288553',
                'price' => 1250,
                'overview' => 'This feminine tawny piece, elegant yet sensual provides a modern take on the one shoulder dress. Crafted from pure light wool, it features an asymmetric, draped fit that accentuates the body with unexpected sleeve. A butterfly wing sleeve with a rose Swarovski crystals. This design revisits a chic and celebratory look.',
                'description' => 'This feminine tawny piece, elegant yet sensual provides a modern take on the one shoulder dress. Crafted from pure light wool, it features an asymmetric, draped fit that accentuates the body with unexpected sleeve. A butterfly wing sleeve with a rose Swarovski crystals. This design revisits a chic and celebratory look.',
                'public' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
        \App\Models\LookProduct::insert([
            ['look_id' => 1, 'product_id' => 1],
            ['look_id' => 1, 'product_id' => 2],
            ['look_id' => 2, 'product_id' => 3],
            ['look_id' => 2, 'product_id' => 4],
            ['look_id' => 3, 'product_id' => 1],
            ['look_id' => 3, 'product_id' => 2],
            ['look_id' => 4, 'product_id' => 3],
            ['look_id' => 4, 'product_id' => 4],
        ]);
        \App\Models\ProductCollection::insert([
            ['product_id' => 1, 'collection_id' => 1],
            ['product_id' => 2, 'collection_id' => 1],
            ['product_id' => 3, 'collection_id' => 2],
            ['product_id' => 4, 'collection_id' => 2],
        ]);
        \App\Models\ProductCategory::insert([
            ['product_id' => 1, 'category_id' => 1],
            ['product_id' => 2, 'category_id' => 2],
            ['product_id' => 3, 'category_id' => 5],
            ['product_id' => 4, 'category_id' => 4],
        ]);
        \App\Models\ProductSubCategory::insert([
            ['product_id' => 1, 'sub_category_id' => 1],
            ['product_id' => 2, 'sub_category_id' => 5],
            ['product_id' => 3, 'sub_category_id' => 13],
            ['product_id' => 4, 'sub_category_id' => 11],
        ]);
        \App\Models\ProductColor::insert([
            ['product_id' => 1, 'color_id' => 1],
            ['product_id' => 2, 'color_id' => 2],
            ['product_id' => 3, 'color_id' => 3],
            ['product_id' => 4, 'color_id' => 1],
        ]);
        \App\Models\ProductSize::insert([
            // product 1
            ['product_id' => 1, 'size_id' => 1, 'qty' => mt_rand(0,10)],
            ['product_id' => 1, 'size_id' => 2, 'qty' => mt_rand(0,10)],
            ['product_id' => 1, 'size_id' => 3, 'qty' => mt_rand(0,10)],
            ['product_id' => 1, 'size_id' => 4, 'qty' => mt_rand(0,10)],
            ['product_id' => 1, 'size_id' => 5, 'qty' => mt_rand(0,10)],
            //product 2
            ['product_id' => 2, 'size_id' => 1, 'qty' => mt_rand(0,10)],
            ['product_id' => 2, 'size_id' => 2, 'qty' => mt_rand(0,10)],
            ['product_id' => 2, 'size_id' => 3, 'qty' => mt_rand(0,10)],
            ['product_id' => 2, 'size_id' => 4, 'qty' => mt_rand(0,10)],
            ['product_id' => 2, 'size_id' => 5, 'qty' => mt_rand(0,10)],
            //product 3
            ['product_id' => 3, 'size_id' => 1, 'qty' => mt_rand(0,10)],
            ['product_id' => 3, 'size_id' => 2, 'qty' => mt_rand(0,10)],
            ['product_id' => 3, 'size_id' => 3, 'qty' => mt_rand(0,10)],
            ['product_id' => 3, 'size_id' => 4, 'qty' => mt_rand(0,10)],
            ['product_id' => 3, 'size_id' => 5, 'qty' => mt_rand(0,10)],
            //product 4
            ['product_id' => 4, 'size_id' => 1, 'qty' => mt_rand(0,10)],
            ['product_id' => 4, 'size_id' => 2, 'qty' => mt_rand(0,10)],
            ['product_id' => 4, 'size_id' => 3, 'qty' => mt_rand(0,10)],
            ['product_id' => 4, 'size_id' => 4, 'qty' => mt_rand(0,10)],
            ['product_id' => 4, 'size_id' => 5, 'qty' => mt_rand(0,10)],
        ]);
        \App\Models\ProductMaterial::insert([
            // product 1
            ['product_id' => 1, 'material_id' => 1],
            ['product_id' => 1, 'material_id' => 2],
            // product 2
            ['product_id' => 2, 'material_id' => 5],
            ['product_id' => 2, 'material_id' => 6],
            // product 3
            ['product_id' => 3, 'material_id' => 3],
            ['product_id' => 3, 'material_id' => 5],
            // product 4
            ['product_id' => 4, 'material_id' => 3],
            ['product_id' => 4, 'material_id' => 4],
        ]);
        \App\Models\Recommendation::insert([
            // product 1
            ['product_id' => 1, 'recommendation_id' => 2],
            ['product_id' => 1, 'recommendation_id' => 3],
            ['product_id' => 1, 'recommendation_id' => 4],
            // product 2
            ['product_id' => 2, 'recommendation_id' => 1],
            ['product_id' => 2, 'recommendation_id' => 3],
            ['product_id' => 2, 'recommendation_id' => 4],
            // product 3
            ['product_id' => 3, 'recommendation_id' => 1],
            ['product_id' => 3, 'recommendation_id' => 2],
            ['product_id' => 3, 'recommendation_id' => 4],
            // product 4
            ['product_id' => 4, 'recommendation_id' => 1],
            ['product_id' => 4, 'recommendation_id' => 2],
            ['product_id' => 4, 'recommendation_id' => 3],
        ]);
    }
}
