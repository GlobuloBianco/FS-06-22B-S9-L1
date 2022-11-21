var Color;
(function (Color) {
    Color[Color["rosso"] = 4] = "rosso";
    Color[Color["verde"] = 5] = "verde";
    Color[Color["giallo"] = 6] = "giallo";
    Color[Color["blu"] = 7] = "blu";
    Color[Color["nero"] = 8] = "nero";
})(Color || (Color = {}));
console.log(Color.blu);
