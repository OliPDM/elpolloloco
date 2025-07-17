const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Clouds('img/5_background/layers/4_clouds/1.png'),
        new Clouds('img/5_background/layers/4_clouds/2.png'),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png', 0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObject('img/5_background/layers/air.png', 720),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 720),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 720),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 720),
        new BackgroundObject('img/5_background/layers/air.png', 1440),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 1440),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 1440),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 1440),
    ],
    [
        new Coin('img/8_coin/coin_1.png', 0),
        new Coin('img/8_coin/coin_1.png', 0),
        new Coin('img/8_coin/coin_1.png', 0),
        new Coin('img/8_coin/coin_1.png', 0),
    ],
    // [
    //     new Bottle('img/6_salsa_bottle/1_salsa_bottle_on_ground.png', 0),

    // ]
);