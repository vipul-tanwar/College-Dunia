const collegesDeck = document.getElementById("deck")
let collegeTemplates = ``;
let loadCollage = 10;
let newLoad = 0;

function loadCollages(){
for( var i = newLoad; i < loadCollage; i++){
    let collegeInfo = collegesObj.colleges[i];
    
    collegeTemplates += `
    <div class="card">
                <div class="ribbon">
                    <p>PROMOTED</p>
                </div>

                <div class="card-image">   
                    <img src="images/${collegeInfo.image}"  alt="">
                    <div class="img-filter" ></div>

                    <div class="img-details">
                        <div class="rating">
                            <p><span>${collegeInfo.rating}</span>/5</p>
                            <p>${collegeInfo.rating_remarks}</p>
                        </div>
                        <div class="college-ranking">
                            <p>${collegeInfo.tags[0]}</p>
                        </div>
                        <div class="dist">
                            <p>${collegeInfo.tags[1]}</p>
                        </div>
                        <p class="ranking">${collegeInfo.ranking}</p>
                    </div>

                </div>
                <div class="card-details ">
                    <div class="college-fees-details" >
                        <div class="college-fees">
                        
                            <p>₹${collegeInfo.original_fees.toLocaleString() }</p>

                            <div class="disc-tag" >
                                <div class="tri"></div>
                                <div class="rect"><p>20</p></div>
                                <div class="circle"></div>
                            </div>

                        </div>
                        
                        <p class="disk-fees">₹${collegeInfo.discounted_fees.toLocaleString() }</p>
                        <p class="sem-fees">${collegeInfo.fees_cycle}</p>
                    </div>
                    <div class="college-name">
                        <h3 class="college-title">${collegeInfo.college_name} 
                        <span class="star-span">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><defs><style>.cls-1{fill:#565656;;}</style></defs><title>star-symbol</title><path class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><defs><style>.cls-1{fill:#565656;;}</style></defs><title>star-symbol</title><path class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><defs><style>.cls-1{fill:#565656;;}</style></defs><title>star-symbol</title><path class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><defs><style>.cls-1{fill:#565656;;}</style></defs><title>star-symbol</title><path class="cls-1" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 117.1"><defs><style>.cls-2{fill: #B2B2B2 ;}</style></defs><title>star-symbol</title><path class="cls-2" d="M64.42,2,80.13,38.7,120,42.26a3.2,3.2,0,0,1,1.82,5.62h0L91.64,74.18l8.9,39A3.19,3.19,0,0,1,98.12,117a3.27,3.27,0,0,1-2.46-.46L61.41,96.1,27.07,116.64a3.18,3.18,0,0,1-4.38-1.09,3.14,3.14,0,0,1-.37-2.38h0l8.91-39L1.09,47.88a3.24,3.24,0,0,1-.32-4.52,3.32,3.32,0,0,1,2.29-1l39.72-3.56L58.49,2a3.24,3.24,0,0,1,5.93,0Z"/></svg>
                        </h3>
                        <p class="college-route">${collegeInfo.nearest_place[0]} <span class="router-len" >| ${collegeInfo.nearest_place[1]}</span></p>
                        <p class="college-distance"> <span class="match">93% Match</span>: ${collegeInfo.famous_nearest_places}</p>
                    </div>
                    <div class="offers" >
                            <p class="offer-flat">${collegeInfo.offertext}</p>
                            <div class="offer-cancel" ><p><span>${collegeInfo.amenties[0]}</span><span class="dot"></span><span>${collegeInfo.amenties[1]}</span></p></div>
                    </div>
                </div>
            </div>

    ` 
}
collegesDeck.innerHTML = collegeTemplates;
loadCollage += 10;
newLoad += 10;
console.log(newLoad)
}

var intersectionObserver = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;
    if( loadCollage <=  collegesObj.colleges.length){
        loadCollages();
    }
});

intersectionObserver.observe(document.querySelector('#last-element'));

