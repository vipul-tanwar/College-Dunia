// console.log(collegesObject);
const collegesDeck = document.getElementById("deck")
let collegeTemplates = ``;
for( var i = 0; i < collegesObj.colleges.length; i++){
    let collegeInfo = collegesObj.colleges[i];
    // console.log(collegeInfo);
    collegeTemplates += `
    <div class="card">
                <div class="ribbon">
                    <p>PROMOTED</p>
                </div>

                <div class="card-image" style="position: relative;">   
                    <img src="images/college_02.jpg"  alt="">
                    <div class="img-filter" ></div>

                    <div class="img-details">
                        <div class="rating">
                            <p><span>3.9</span>/5</p>
                            <p>Very Good</p>
                        </div>
                        <div class="college-ranking">
                            <p>Best collge 2018</p>
                        </div>
                        <div class="dist">
                            <p>2kms away</p>
                        </div>
                        <p class="ranking">#7 in 260 colleges in north campus</p>
                    </div>

                </div>
                <div class="card-details ">
                    <div class="college-fees-details" >
                        <div class="college-fees">
                            <p style="display: inline-block;">₹68756</p>

                            <!-- <div class="shape" >
                                <div class="tri"></div>
                                <div class="rect"><p>20</p></div>
                                <div class="circle"></div>
                            </div> -->
                        </div>
                        
                        <p class="disk-fees">₹5000</p>
                        <p class="sem-fees">Per Semester (3 months)</p>
                    </div>
                    <div class="college-name">
                        <h3 class="college-title">Hansraj College Delhi University</h3>
                        <p class="college-route">Near Vishwavidyalya Metro Station <span class="router-len" >| 2 Kms away from bus stand</span></p>
                        <p class="college-distance"> <span class="match">93% Match</span> : 2.5kms from GTB Nagar, 7 Kms from Rajiv Chowk</p>
                    </div>
                    <div class="offers" >
                            <p class="offer-flat">Flat <span class="spend">Rs2,000</span> off + upto Rs <span class="spend">500</span> wallet! to avail... <span class="login">LOGIN</span></p>
                            <p class="offer-cancel" > Free Cancellation <span>.</span> Wi-Fi</p>
                    </div>
                </div>
            </div>

    ` 
}
collegesDeck.innerHTML = collegeTemplates