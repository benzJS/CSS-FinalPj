for(carousel of document.getElementsByClassName('carousel')){
    Array(15).fill(6).forEach(e => {
        carousel.innerHTML += `
            <div class="vertical-rec-item">
                <div class="vertical-rec-item-art">
                    <div class="vertical-rec-item-art-overlay">
                        <a href="#" class="button signin vertical-rec-item-btn">Learn more</a>
                        <a href="#" class="vertical-rec-item-wishlistadd">
                            <i class="far fa-heart"></i>
                            Add to wishlist
                        </a>
                    </div>
                </div>
                <div class="vertical-rec-item-footer">
                    <div class="vertical-rec-item-title">Battlefield™ V Deluxe Edition</div>
                    <div class="vertical-rec-item-price">$109.90</div>
                </div>
            </div>
        `
    })
}

for(carouselControl of document.getElementsByClassName('fa-arrow-circle-right')){
    carouselControl.addEventListener("click", (ev) => {
        var currentTranslateX = document.getElementsByClassName(ev.target.id)[0].style.transform.split(/\(|p/);
        tmp = -Number(document.getElementsByClassName(ev.target.id)[0].offsetWidth);
        if(currentTranslateX.length > 2) tmp = Number(currentTranslateX[1]) - document.getElementsByClassName(ev.target.id)[0].offsetWidth;
        if(Math.abs(tmp) > document.getElementsByClassName(ev.target.id)[0].scrollWidth) tmp = 0;
        document.getElementsByClassName(ev.target.id)[0].style.transform = `translateX(${tmp}px)`;
    })
}

for(carouselControl of document.getElementsByClassName('fa-arrow-circle-left')){
    carouselControl.addEventListener("click", (ev) => {
        var currentTranslateX = document.getElementsByClassName(ev.target.id)[0].style.transform.split(/\(|p/);
        // tmp = Number(document.getElementsByClassName(ev.target.id)[0].offsetWidth);
        tmp = 0;
        if(currentTranslateX.length > 2) tmp = Number(currentTranslateX[1]) + document.getElementsByClassName(ev.target.id)[0].offsetWidth;
        if(Number(currentTranslateX[1]) === 0) tmp = 0;
        document.getElementsByClassName(ev.target.id)[0].style.transform = `translateX(${tmp}px)`;
    })
}