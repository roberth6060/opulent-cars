"use strict";
const sportsCarCollection = [
    {
        carName: "2022 Lamborghini Huracan",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=huracan&modelRange=huracan-evo&modelVariant=co&modelYear=2022&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "413",
        carRwhp: "631",
        carPrice: "261,497",
        carType: "rwd",
        url: "https://www.edmunds.com/lamborghini/huracan/#:~:text=The%20least-expensive%202022%20Lamborghini,7AM)%20which%20starts%20at%20%24209%2C409",
    },
    {
        carName: "2019 Porsche 911",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=porsche&modelFamily=911&modelRange=911&modelVariant=ca&modelYear=2019&powerTrain=fossil&transmission=0&bodySize=2&trim=0&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "723",
        carRwhp: "502",
        carPrice: "388,990",
        carType: "rwd",
        url: "https://www.edmunds.com/porsche/911/2019/vin/WP0CF2A99KS172765/?radius=100",
    },
    {
        carName: "2016 McLaren 675LT Spider",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=mclaren&modelFamily=540c&modelRange=540c&modelVariant=co&modelYear=2018&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "2,927",
        carRwhp: "666",
        carPrice: "313,000",
        carType: "rwd",
        url: "",
    },
    {
        carName: "2020 Mercedes-Benz AMG® GT",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=mercedes&modelFamily=amg-gt&modelRange=amg-gt&modelVariant=ca&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=2&trim=0&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "3560",
        carRwhp: "577",
        carPrice: "185,818",
        carType: "rwd",
        url: "https://www.edmunds.com/mercedes-benz/amg-gt/2020/vin/W1KYJ7KAXLA029699/?radius=100",
    },
    {
        carName: "2019 Toyota Supra",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=audi&modelFamily=r8&modelRange=r8&modelVariant=ca&modelYear=2021&powerTrain=fossil&transmission=0&bodySize=2&trim=performance&paintId=pspc0014&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "3516.4",
        carRwhp: "532",
        carPrice: "166,981",
        carType: "rwd",
        url: "https://www.edmunds.com/audi/r8/2021/vin/WUABAAFX6M7900787/?radius=100",
    },
];
const muscleCarCollection = [
    {
        carName: "2021 Ford Mustang",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=ford&modelFamily=mustang&modelRange=mach-1&modelVariant=co&modelYear=2021&powerTrain=fossil&transmission=0&bodySize=2&trim=0&paintId=pspc0096&angle=01",
        carLbs: "365",
        carRwhp: "335",
        carPrice: "49,990",
        carType: "rwd",
        url: "https://www.carmax.com/car/beta/23246405",
    },
    {
        carName: "2019 Toyota Supra",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=aventador&modelRange=aventador-svj&modelVariant=co&modelYear=2019&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=imagin-grey&angle=01",
        carLbs: "365",
        carRwhp: "335",
        carPrice: "49,990",
        carType: "rwd",
        url: "",
    },
    {
        carName: "2022 Land Rover Range Rover Sport",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=land-rover&modelFamily=range-rover&modelRange=range-rover&modelVariant=od&modelYear=2022&powerTrain=fossil&transmission=0&bodySize=5&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "6,613",
        carRwhp: "575",
        carPrice: "49,990",
        carType: "rwd",
        url: "",
    },
    {
        carName: "2019 Toyota Supra",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=aventador&modelRange=aventador-svj&modelVariant=co&modelYear=2019&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=imagin-grey&angle=01",
        carLbs: "365",
        carRwhp: "335",
        carPrice: "49,990",
        carType: "rwd",
        url: "",
    },
    {
        carName: "2019 Toyota Supra",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=aventador&modelRange=aventador-svj&modelVariant=co&modelYear=2019&powerTrain=petrol&transmission=0&bodySize=2&trim=eu&paintId=imagin-grey&angle=01",
        carLbs: "365",
        carRwhp: "335",
        carPrice: "49,990",
        carType: "rwd",
        url: "",
    },
];
const suvCarCollection = [
    {
        carName: "2022 Lamborghini Urus",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=lamborghini&modelFamily=urus&modelRange=urus&modelVariant=od&modelYear=2022&powerTrain=petrol&transmission=0&bodySize=5&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "627",
        carRwhp: "641",
        carPrice: "245,381",
        carType: "awd",
        url: "https://www.edmunds.com/lamborghini/urus/",
    },
    {
        carName: "2020 Mercedes-Benz G-Class",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=mercedes&modelFamily=g-class&modelRange=g-class&modelVariant=od&modelYear=2020&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "6,500",
        carRwhp: "577",
        carPrice: "199,700",
        carType: "awd",
        url: "https://www.edmunds.com/mercedes-benz/g-class/2020/vin/WDCYC7HJ3LX337090/?radius=100",
    },
    {
        carName: "2022 Land Rover Range Rover Sport",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=land-rover&modelFamily=range-rover&modelRange=range-rover&modelVariant=od&modelYear=2022&powerTrain=fossil&transmission=0&bodySize=5&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "6,613",
        carRwhp: "575",
        carPrice: "49,990",
        carType: "rwd",
        url: "",
    },
    {
        carName: "2022 Tesla Model X",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=tesla&modelFamily=model-x&modelRange=model-x&modelVariant=od&modelYear=2022&powerTrain=electric&transmission=0&bodySize=5&trim=eu&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "5,000",
        carRwhp: "670",
        carPrice: "127,990",
        carType: "awd",
        url: "https://www.edmunds.com/tesla/model-x/2022/vin/7SAXCAE55NF349828/?radius=100",
    },
    {
        carName: "2021 Audi RS Q8",
        carImage: "https://cdn.imagin.studio/getImage?&customer=usrobert-s-website&make=audi&modelFamily=q8&modelRange=q8&modelVariant=od&modelYear=2021&powerTrain=fossil&transmission=0&bodySize=5&trim=0&paintId=pspc0041&fileType=png&zoomType=fullscreen&zoomLevel=100&width=1600&angle=01",
        carLbs: "7,700",
        carRwhp: "591",
        carPrice: "127,990",
        carType: "awd",
        url: "https://www.edmunds.com/audi/rs-q8/2021/vin/WU1ARBF14MD018475/?radius=100",
    },
];
const collectionTotal = sportsCarCollection.concat(muscleCarCollection, suvCarCollection);
const collection = document.querySelector(".total-collection");
const sportsCollection = document.querySelector(".sports-collection");
const btn = document.querySelector(".button");
function buildList(carNum) {
    if (btn) {
        btn.outerHTML = "";
    }
    var widgetContent = "";
    let i = carNum;
    for (; i < carNum + 4; i++) {
        if (collectionTotal[i].carImage === "") {
            collectionTotal[i].carImage =
                "https://res.cloudinary.com/dmnixrpra/image/upload/v1585925027/IMAGE_COMING_SOON.png";
        }
        var wheelType = "";
        if (collectionTotal[i].carType == "rwd") {
            wheelType = " rwhp";
        }
        else if (collectionTotal[i].carType == "fwd") {
            wheelType = " fwhp";
        }
        else {
            wheelType = " hp";
        }
        widgetContent +=
            `<a class="car-link" href=${collectionTotal[i].url}>` +
                '<div class="car-card">' +
                "<h2>" +
                collectionTotal[i].carName +
                "</h2>" +
                '<img src="' +
                collectionTotal[i].carImage +
                '">' +
                "<ul>" +
                "<li>" +
                collectionTotal[i].carLbs +
                " lb-ft" +
                "</li>" +
                "<li>" +
                collectionTotal[i].carRwhp +
                wheelType +
                "</li>" +
                "<li>" +
                "$" +
                collectionTotal[i].carPrice +
                "</li>" +
                "</ul>" +
                "</div>" +
                "</a>";
    }
    collection.insertAdjacentHTML("beforeend", widgetContent);
    var buttonContent = "";
    if (i < collectionTotal.length) {
        buttonContent +=
            '<button class="button" type="button" onclick="buildList(' +
                i +
                ')">More Cars</button>';
    }
    collection.insertAdjacentHTML("afterend", buttonContent);
}
buildList(0);
//# sourceMappingURL=collection.js.map