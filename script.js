// console.log(collegesObject);
const collegesDeck = document.getElementById("deck")
let collegeTemplates = ``;
let loadCollage = 10;
function loadCollages(){

for( var i = 0; i < loadCollage; i++){
    let collegeInfo = collegesObj.colleges[i];
    // console.log(collegeInfo);
    let { image } = collegeInfo
    collegeTemplates += `
    <div class="card">
                <div class="ribbon">
                    <p>PROMOTED ${i} </p>
                </div>

                <div class="card-image" style="position: relative;">   
                    <img src="images/${image}"  alt="">
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
                        
                            <p>₹${collegeInfo.original_fees}</p>

                            <div class="disc-tag" >
                                <div class="tri"></div>
                                <div class="rect"><p>20</p></div>
                                <div class="circle"></div>
                            </div>

                        </div>
                        
                        <p class="disk-fees">₹${collegeInfo.discounted_fees}</p>
                        <p class="sem-fees">${collegeInfo.fees_cycle}</p>
                    </div>
                    <div class="college-name">
                        <h3 class="college-title">${collegeInfo.college_name}</h3>
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
collegesDeck.innerHTML = collegeTemplates
loadCollage += 10
}

var intersectionObserver = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;
    loadCollages();
});

intersectionObserver.observe(document.querySelector('#last-element'));

