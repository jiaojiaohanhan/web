/**
 * Created by l on 2017/12/23.
 */
require(["Carousel"],function (Carousel) {
    var carousel1 = new Carousel();
    carousel1.init({
        selector:"#content1",
        imgDate:["image/pms.3053874.jpg","image/pms.28498495.jpg","image/pms.46368911.jpg","image/pms.54329452.jpg","image/pms.70932288.png"],
        buttonType:"squire",//circle squire
        btnPos:"bottom",//center bottom
        speed:"2000"
    });

    var carousel2 = new Carousel();
    carousel2.init({
        selector:"#content2",
        imgDate:["image/pms.3053874.jpg","image/pms.28498495.jpg","image/pms.46368911.jpg","image/pms.54329452.jpg","image/pms.70932288.png"],
        buttonType:"circle",//circle squire
        btnPos:"center",//center bottom
        speed:"1000"
    });
})