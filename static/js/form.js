// Salecting category
const category = document.querySelectorAll("#category");
const category_img = document.querySelectorAll("#category-img");
const category_selected = document.querySelectorAll("#category-selected");

let low_price = 0.0;
let heigh_price = 0.0;

for(let x=0; x<category.length; x++){
    category[x].addEventListener("click", function(){
        document.getElementById("category-name").value = category_selected[x].innerHTML;

        if(category_selected[x].innerHTML == "Repair Roof"){
            document.getElementById("low-price").innerHTML = "$1.48";
            document.getElementById("high-price").innerHTML = "$5.12";
            low_price = 1.48;
            heigh_price = 5.12;
        }else if(category_selected[x].innerHTML == "Replace Roof"){
            document.getElementById("low-price").innerHTML = "$2";
            document.getElementById("high-price").innerHTML = "$6.12";
            low_price = 2;
            heigh_price = 6.12;
        }else{
            document.getElementById("low-price").innerHTML = "$3";
            document.getElementById("high-price").innerHTML = "$7.12";
            low_price = 3;
            heigh_price = 7.12;
        }

        noSelection();
        category_img[x].src="./static/images/selected.jpeg";
        
    });
}

function noSelection(){
    for(let i=0; i<category_img.length; i++){
        category_img[i].src="./static/images/option.jpeg";
    }
}

//Selecting Acuracy

const acurate_estimation_option = document.querySelectorAll("#acurate-estimation-option");
const acurate_estimation_img = document.querySelectorAll("#acurate-estimation-img");
const acurate_estimation_selected = document.querySelectorAll("#acurate-estimation-selected");

for(let x=0; x<acurate_estimation_option.length; x++){
    acurate_estimation_option[x].addEventListener("click", function(){
        document.getElementById("accuration-type").value = acurate_estimation_selected[x].innerHTML;
        noAcuracy();
        acurate_estimation_img[x].src="./static/images/selected.jpeg";
    });
}

function noAcuracy(){
    for(let i=0; i<acurate_estimation_img.length; i++){
        acurate_estimation_img[i].src="./static/images/option.jpeg";
    }
}

//Work with insurance company

const work_insurance_company_option = document.querySelectorAll("#work-insurance-company-option");
const work_insurance_company_option_img = document.querySelectorAll("#work-insurance-company-option-img");
const work_insurance_company_selection = document.querySelectorAll("#work-insurance-company-selection");

for(let x=0; x<work_insurance_company_option.length; x++){
    work_insurance_company_option[x].addEventListener("click", function(){
        document.getElementById("instant-quote-selected").value = work_insurance_company_selection[x].innerHTML;
        noWorkInsurance();
        work_insurance_company_option_img[x].src="./static/images/selected.jpeg";
    });
}

function noWorkInsurance(){
    for(let i=0; i<work_insurance_company_option_img.length; i++){
        work_insurance_company_option_img[i].src="./static/images/option.jpeg";
    }
}

//severe-damage

const severe_damage_option = document.querySelectorAll("#severe-damage-option");
const severe_damage_img = document.querySelectorAll("#severe-damage-img");
const severe_damage_selection = document.querySelectorAll("#severe-damage-selection");

for(let x=0; x<severe_damage_option.length; x++){
    severe_damage_option[x].addEventListener("click", function(){
        document.getElementById("severe-damage-selected").value = severe_damage_selection[x].innerHTML;
        noDamageSelection();
        severe_damage_img[x].src="./static/images/selected.jpeg";
    });
}

function noDamageSelection(){
    for(let i=0; i<severe_damage_img.length; i++){
        severe_damage_img[i].src="./static/images/option.jpeg";
    }
}

//roof-slope

const roof_slope_option = document.querySelectorAll("#roof-slope-option");
const roof_slope_img = document.querySelectorAll("#roof-slope-img");
const roof_slope_selection = document.querySelectorAll("#roof-slope-selection");

for(let x=0; x<roof_slope_option.length; x++){
    roof_slope_option[x].addEventListener("click", function(){
        document.getElementById("roof-slope-selected").value = roof_slope_selection[x].innerHTML;
        roofTopSelection();
        roof_slope_img[x].src="./static/images/selected.jpeg";
    });
}

function roofTopSelection(){
    for(let i=0; i<roof_slope_img.length; i++){
        roof_slope_img[i].src="./static/images/option.jpeg";
    }
}

//home-story-option

const home_story_option = document.querySelectorAll("#home-story-option");
const home_story_img = document.querySelectorAll("#home-story-img");
const home_story_selection = document.querySelectorAll("#home-story-selection");

for(let x=0; x<home_story_option.length; x++){
    home_story_option[x].addEventListener("click", function(){
        document.getElementById("home-story-selected").value = home_story_selection[x].innerHTML;
        homeStorySelection();
        home_story_img[x].src="./static/images/selected.jpeg";
    });
}

function homeStorySelection(){
    for(let i=0; i<home_story_img.length; i++){
        home_story_img[i].src="./static/images/option.jpeg";
    }
}

//material-quality

const material_quality_option = document.querySelectorAll("#material-quality-option");
const material_quality_img = document.querySelectorAll("#material-quality-img");
const material_quality_selection = document.querySelectorAll("#material-quality-selection");

for(let x=0; x<material_quality_option.length; x++){
    material_quality_option[x].addEventListener("click", function(){
        document.getElementById("material-quality-selected").value = material_quality_selection[x].innerHTML;
        materialQualitySelection();
        material_quality_img[x].src="./static/images/selected.jpeg";
    });
}

function materialQualitySelection(){
    for(let i=0; i<material_quality_img.length; i++){
        material_quality_img[i].src="./static/images/option.jpeg";
    }
}

//get started

const get_started_option = document.querySelectorAll("#get-started-option");
const get_started_img = document.querySelectorAll("#get-started-img");
const get_started_selection = document.querySelectorAll("#get-started-selection");

for(let x=0; x<get_started_option.length; x++){
    get_started_option[x].addEventListener("click", function(){
        document.getElementById("get-started-selected").value = get_started_selection[x].innerHTML;
        getStartedSelection();
        get_started_img[x].src="./static/images/selected.jpeg";
    });
}

function getStartedSelection(){
    for(let i=0; i<get_started_img.length; i++){
        get_started_img[i].src="./static/images/option.jpeg";
    }
}

//financing-partners

const financing_partners_option = document.querySelectorAll("#financing-partners-option");
const financing_partners_img = document.querySelectorAll("#financing-partners-img");
const financing_partners_selection = document.querySelectorAll("#financing-partners-selection");

for(let x=0; x<financing_partners_option.length; x++){
    financing_partners_option[x].addEventListener("click", function(){
        document.getElementById("financing-partners-selected").value = financing_partners_selection[x].innerHTML;
        financingPartnersSelection();
        financing_partners_img[x].src="./static/images/selected.jpeg";
    });
}

function financingPartnersSelection(){
    for(let i=0; i<financing_partners_img.length; i++){
        financing_partners_img[i].src="./static/images/option.jpeg";
    }
}

//choose-a-day

const choose_a_day_option = document.querySelectorAll("#choose-a-day-option");
const choose_a_day_img = document.querySelectorAll("#choose-a-day-img");
const choose_a_day_selection = document.querySelectorAll("#choose-a-day-selection");

for(let x=0; x<choose_a_day_option.length; x++){
    choose_a_day_option[x].addEventListener("click", function(){
        document.getElementById("choose-a-day-selected").value = choose_a_day_selection[x].innerHTML;
        chooseADaySelection();
        choose_a_day_img[x].src="./static/images/selected.jpeg";
    });
}

function chooseADaySelection(){
    for(let i=0; i<choose_a_day_img.length; i++){
        choose_a_day_img[i].src="./static/images/option.jpeg";
    }
}

const myRange = document.getElementById("size_of_house");
const range_output = document.getElementById("range_output");

myRange.oninput = function() {
    range_output.innerHTML = this.value+" ft";
}


// next-option
const next_option = document.getElementById("next-option");

const progress = document.getElementById("progress");

next_option.addEventListener("click", function(){
    if(document.getElementById("category-selection").classList.contains("active-div")){
        if(document.getElementById("category-name").value != ""){
            document.getElementById("category-selection").classList.remove("active-div");
            document.getElementById("category-selection").classList.add("inactive-div");

            document.getElementById("zip-code-selection").classList.add("active-div");
            document.getElementById("zip-code-selection").classList.remove("inactive-div");

            document.getElementById("previous-option").style.display="block";
            progress.style.width = '5%';
        }else{
            window.alert("Please select the category");
        }
    }else if(document.getElementById("zip-code-selection").classList.contains("active-div")){
        if(document.getElementById("zip-code-entered").value != ""){
            document.getElementById("zip-code-selection").classList.remove("active-div");
            document.getElementById("zip-code-selection").classList.add("inactive-div");

            document.getElementById("detail-selection").classList.add("active-div");
            document.getElementById("detail-selection").classList.remove("inactive-div");

            progress.style.width = '10%';
        }else{
            window.alert("Please enter zip code");
        }
    }else if(document.getElementById("detail-selection").classList.contains("active-div")){
        if(document.getElementById("name-entered").value != "" &&
            document.getElementById("phone-entered").value != "" &&
            document.getElementById("email-entered").value.toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ){
            document.getElementById("detail-selection").classList.remove("active-div");
            document.getElementById("detail-selection").classList.add("inactive-div");

            document.getElementById("acurate-estimation").classList.add("active-div");
            document.getElementById("acurate-estimation").classList.remove("inactive-div");

            document.getElementById("client-phone").innerHTML = "<b>Phone:</b>"+document.getElementById("phone-entered").value;
            document.getElementById("client-email").innerHTML = "<b>Email:</b>"+document.getElementById("email-entered").value;

            document.getElementById("client-phone").style.display = "block";
            document.getElementById("client-email").style.display = "block";


            progress.style.width = '20%';
        }else{
            window.alert("Please fill all fields in proper way");
        }
    }else if(document.getElementById("acurate-estimation").classList.contains("active-div")){
        if(document.getElementById("accuration-type").value != ""){
            document.getElementById("acurate-estimation").classList.remove("active-div");
            document.getElementById("acurate-estimation").classList.add("inactive-div");

            if(document.getElementById("accuration-type").value == "Schedule Consultation"){
                document.getElementById("schedule-consultation").classList.add("active-div");
                document.getElementById("schedule-consultation").classList.remove("inactive-div");
                progress.style.width = '90%';
            }else{
                document.getElementById("house-size").classList.add("active-div");
                document.getElementById("house-size").classList.remove("inactive-div");

                progress.style.width = '25%';
            }
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("house-size").classList.contains("active-div")){
        if(document.getElementById("size_of_house").value != ""){
            document.getElementById("house-size").classList.remove("active-div");
            document.getElementById("house-size").classList.add("inactive-div");

            document.getElementById("low-price").innerHTML="$"+(document.getElementById("size_of_house").value*1.3*low_price).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(document.getElementById("size_of_house").value*1.3*heigh_price).toFixed(2);

            low_price = (document.getElementById("size_of_house").value*1.3*low_price).toFixed(2);
            heigh_price = (document.getElementById("size_of_house").value*1.3*heigh_price).toFixed(2);

            document.getElementById("sq-1").style.display = "none";
            document.getElementById("sq-2").style.display = "none";

            document.getElementById("instant-quote").classList.add("active-div");
            document.getElementById("instant-quote").classList.remove("inactive-div");
            progress.style.width = '30%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("instant-quote").classList.contains("active-div")){
        if(document.getElementById("instant-quote-selected").value != ""){
            document.getElementById("instant-quote").classList.remove("active-div");
            document.getElementById("instant-quote").classList.add("inactive-div");

            document.getElementById("severe-damage").classList.add("active-div");
            document.getElementById("severe-damage").classList.remove("inactive-div");
            progress.style.width = '35%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("severe-damage").classList.contains("active-div")){
        if(document.getElementById("severe-damage-selected").value != ""){
            document.getElementById("severe-damage").classList.remove("active-div");
            document.getElementById("severe-damage").classList.add("inactive-div");

            document.getElementById("roof-slope").classList.add("active-div");
            document.getElementById("roof-slope").classList.remove("inactive-div");
            progress.style.width = '40%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("roof-slope").classList.contains("active-div")){
        if(document.getElementById("roof-slope-selected").value != ""){
            document.getElementById("roof-slope").classList.remove("active-div");
            document.getElementById("roof-slope").classList.add("inactive-div");

            if(document.getElementById("roof-slope-selected").value == "Low"){
                document.getElementById("low-price").innerHTML="$"+(0.8*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(0.8*heigh_price).toFixed(2);

                low_price = (0.8*low_price).toFixed(2);
                heigh_price = (0.8*heigh_price).toFixed(2);

            }else if(document.getElementById("roof-slope-selected").value == "High"){
                document.getElementById("low-price").innerHTML="$"+(1.2*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(1.2*heigh_price).toFixed(2);

                low_price = (1.2*low_price).toFixed(2);
                heigh_price = (1.2*heigh_price).toFixed(2);
            }

            document.getElementById("home-story").classList.add("active-div");
            document.getElementById("home-story").classList.remove("inactive-div");

            progress.style.width = '45%';

        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("home-story").classList.contains("active-div")){
        if(document.getElementById("home-story-selected").value != ""){
            document.getElementById("home-story").classList.remove("active-div");
            document.getElementById("home-story").classList.add("inactive-div");

            if(document.getElementById("home-story-selected").value == "Two Story"){
                document.getElementById("low-price").innerHTML="$"+(0.7*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(0.7*heigh_price).toFixed(2);

                low_price = (0.7*low_price).toFixed(2);
                heigh_price = (0.7*heigh_price).toFixed(2);

            }else if(document.getElementById("home-story-selected").value == "Two story with basement"){
                document.getElementById("low-price").innerHTML="$"+(0.6*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(0.6*heigh_price).toFixed(2);

                low_price = (0.6*low_price).toFixed(2);
                heigh_price = (0.6*heigh_price).toFixed(2);
            }else if(document.getElementById("home-story-selected").value == "Three Story"){
                document.getElementById("low-price").innerHTML="$"+(0.5*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(0.5*heigh_price).toFixed(2);

                low_price = (0.5*low_price).toFixed(2);
                heigh_price = (0.5*heigh_price).toFixed(2);
            }

            document.getElementById("material-quality").classList.add("active-div");
            document.getElementById("material-quality").classList.remove("inactive-div");

            progress.style.width = '50%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("material-quality").classList.contains("active-div")){
        if(document.getElementById("material-quality-selected").value != ""){
            document.getElementById("material-quality").classList.remove("active-div");
            document.getElementById("material-quality").classList.add("inactive-div");

            if(document.getElementById("material-quality-selected").value == "Good - 7 year guarantee"){
                document.getElementById("high-price").innerHTML="$"+(0.2*heigh_price).toFixed(2);

                heigh_price = (0.2*heigh_price).toFixed(2);

            }else if(document.getElementById("material-quality-selected").value == "Better - 15 year guarantee"){
                document.getElementById("low-price").innerHTML="$"+(1.5*low_price).toFixed(2);
                document.getElementById("high-price").innerHTML="$"+(0.8*heigh_price).toFixed(2);

                low_price = (1.5*low_price).toFixed(2);
                heigh_price = (0.8*heigh_price).toFixed(2);

            }else if(document.getElementById("material-quality-selected").value == "Best - 30-year guarantee"){
                document.getElementById("low-price").innerHTML="$"+(2.5*low_price).toFixed(2);

                low_price = (2.5*low_price).toFixed(2);
            }

            document.getElementById("get-started").classList.add("active-div");
            document.getElementById("get-started").classList.remove("inactive-div");

            progress.style.width = '60%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("get-started").classList.contains("active-div")){
        if(document.getElementById("get-started-selected").value != ""){
            document.getElementById("get-started").classList.remove("active-div");
            document.getElementById("get-started").classList.add("inactive-div");

            document.getElementById("financing-partners").classList.add("active-div");
            document.getElementById("financing-partners").classList.remove("inactive-div");

            progress.style.width = '70%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("financing-partners").classList.contains("active-div")){
        if(document.getElementById("financing-partners").value != ""){
            document.getElementById("financing-partners").classList.remove("active-div");
            document.getElementById("financing-partners").classList.add("inactive-div");

            document.getElementById("choose-a-day").classList.add("active-div");
            document.getElementById("choose-a-day").classList.remove("inactive-div");

            progress.style.width = '85%';
        }else{
            window.alert("Please select one option");
        }
    }else if(document.getElementById("choose-a-day").classList.contains("active-div")){
        if(document.getElementById("choose-a-day-selected").value != ""){
            document.getElementById("choose-a-day").classList.remove("active-div");
            document.getElementById("choose-a-day").classList.add("inactive-div");

            if(document.getElementById("choose-a-day-selected").value == "Yes"){
                document.getElementById("schedule-consultation").classList.add("active-div");
                document.getElementById("schedule-consultation").classList.remove("inactive-div");

                progress.style.width = '90%';
            }else{
                document.getElementById("roofing_form").submit();
            }
        }else{
            window.alert("Please select one option");
        }
    }
});

// previous-bnt

const previous_option = document.getElementById("previous-option");

previous_option.addEventListener("click", function(){

    if(document.getElementById("zip-code-selection").classList.contains("active-div")){
        document.getElementById("category-selection").classList.add("active-div");
        document.getElementById("category-selection").classList.remove("inactive-div");

        document.getElementById("zip-code-selection").classList.remove("active-div");
        document.getElementById("zip-code-selection").classList.add("inactive-div");
        document.getElementById("previous-option").style.display="none";
        progress.style.width = '0%';
    }else if(document.getElementById("detail-selection").classList.contains("active-div")){

        document.getElementById("zip-code-selection").classList.add("active-div");
        document.getElementById("zip-code-selection").classList.remove("inactive-div");

        document.getElementById("detail-selection").classList.remove("active-div");
        document.getElementById("detail-selection").classList.add("inactive-div");

        progress.style.width = '5%';
    }else if(document.getElementById("acurate-estimation").classList.contains("active-div")){
        document.getElementById("detail-selection").classList.add("active-div");
        document.getElementById("detail-selection").classList.remove("inactive-div");

        document.getElementById("acurate-estimation").classList.remove("active-div");
        document.getElementById("acurate-estimation").classList.add("inactive-div");

        document.getElementById("client-phone").style.display = "none";
        document.getElementById("client-email").style.display = "none";

        progress.style.width = '10%';
    }else if(document.getElementById("schedule-consultation").classList.contains("active-div")){

        if(document.getElementById("choose-a-day-selected").value == "Yes"){
            document.getElementById("choose-a-day").classList.add("active-div");
            document.getElementById("choose-a-day").classList.remove("inactive-div");

           
            document.getElementById("schedule-consultation").classList.remove("active-div");
            document.getElementById("schedule-consultation").classList.add("inactive-div");

            progress.style.width = '80%';
        }else{
            document.getElementById("acurate-estimation").classList.add("active-div");
            document.getElementById("acurate-estimation").classList.remove("inactive-div");

            document.getElementById("schedule-consultation").classList.remove("active-div");
            document.getElementById("schedule-consultation").classList.add("inactive-div");

            progress.style.width = '20%';
        }
        
    }else if(document.getElementById("house-size").classList.contains("active-div")){
        document.getElementById("acurate-estimation").classList.add("active-div");
        document.getElementById("acurate-estimation").classList.remove("inactive-div");

        document.getElementById("house-size").classList.remove("active-div");
        document.getElementById("house-size").classList.add("inactive-div");

        progress.style.width = '20%';
        
    }else if(document.getElementById("instant-quote").classList.contains("active-div")){
        document.getElementById("house-size").classList.add("active-div");
        document.getElementById("house-size").classList.remove("inactive-div");

        document.getElementById("low-price").innerHTML="$"+(low_price/document.getElementById("size_of_house").value/1.3).toFixed(2);
        document.getElementById("high-price").innerHTML="$"+(heigh_price/document.getElementById("size_of_house").value/1.3).toFixed(2);

        low_price = (low_price/document.getElementById("size_of_house").value/1.3).toFixed(2);
        heigh_price = (heigh_price/document.getElementById("size_of_house").value/1.3).toFixed(2);

        document.getElementById("sq-1").style.display = "block";
        document.getElementById("sq-2").style.display = "block";

        document.getElementById("instant-quote").classList.remove("active-div");
        document.getElementById("instant-quote").classList.add("inactive-div");
        progress.style.width = '25%';

    }else if(document.getElementById("severe-damage").classList.contains("active-div")){
        document.getElementById("instant-quote").classList.add("active-div");
        document.getElementById("instant-quote").classList.remove("inactive-div");

        document.getElementById("severe-damage").classList.remove("active-div");
        document.getElementById("severe-damage").classList.add("inactive-div");
        progress.style.width = '30%';
    }else if(document.getElementById("roof-slope").classList.contains("active-div")){
        document.getElementById("severe-damage").classList.add("active-div");
        document.getElementById("severe-damage").classList.remove("inactive-div");

        document.getElementById("roof-slope").classList.remove("active-div");
        document.getElementById("roof-slope").classList.add("inactive-div");
        progress.style.width = '35%';
    }else if(document.getElementById("home-story").classList.contains("active-div")){
        document.getElementById("roof-slope").classList.add("active-div");
        document.getElementById("roof-slope").classList.remove("inactive-div");

        if(document.getElementById("roof-slope-selected").value == "Low"){
            document.getElementById("low-price").innerHTML="$"+(low_price/0.8).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.8).toFixed(2);

            low_price = (low_price/0.8).toFixed(2);
            heigh_price = (heigh_price/0.8).toFixed(2);

        }else if(document.getElementById("roof-slope-selected").value == "High"){
            document.getElementById("low-price").innerHTML="$"+(low_price/1.2).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/1.2).toFixed(2);

            low_price = (low_price/1.2).toFixed(2);
            heigh_price = (heigh_price/1.2).toFixed(2);
        }

        document.getElementById("home-story").classList.remove("active-div");
        document.getElementById("home-story").classList.add("inactive-div");

        progress.style.width = '40%';
    }else if(document.getElementById("material-quality").classList.contains("active-div")){
        document.getElementById("home-story").classList.add("active-div");
        document.getElementById("home-story").classList.remove("inactive-div");

        if(document.getElementById("home-story-selected").value == "Two Story"){
            document.getElementById("low-price").innerHTML="$"+(low_price/0.7).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.7).toFixed(2);

            low_price = (low_price/0.7).toFixed(2);
            heigh_price = (heigh_price/0.7).toFixed(2);

        }else if(document.getElementById("home-story-selected").value == "Two story with basement"){
            document.getElementById("low-price").innerHTML="$"+(low_price/0.6).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.6).toFixed(2);

            low_price = (low_price/0.6).toFixed(2);
            heigh_price = (heigh_price/0.6).toFixed(2);
        }else if(document.getElementById("home-story-selected").value == "Three Story"){
            document.getElementById("low-price").innerHTML="$"+(low_price/0.5).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.5).toFixed(2);

            low_price = (low_price/0.5).toFixed(2);
            heigh_price = (heigh_price/0.5).toFixed(2);
        }

        document.getElementById("material-quality").classList.remove("active-div");
        document.getElementById("material-quality").classList.add("inactive-div");

        progress.style.width = '45%';
    }else if(document.getElementById("get-started").classList.contains("active-div")){
        document.getElementById("material-quality").classList.add("active-div");
        document.getElementById("material-quality").classList.remove("inactive-div");

        if(document.getElementById("material-quality-selected").value == "Good - 7 year guarantee"){
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.2).toFixed(2);

            heigh_price = (heigh_price/0.2).toFixed(2);

        }else if(document.getElementById("material-quality-selected").value == "Better - 15 year guarantee"){
            document.getElementById("low-price").innerHTML="$"+(low_price/1.5).toFixed(2);
            document.getElementById("high-price").innerHTML="$"+(heigh_price/0.8).toFixed(2);

            low_price = (low_price/1.5).toFixed(2);
            heigh_price = (heigh_price/0.8).toFixed(2);

        }else if(document.getElementById("material-quality-selected").value == "Best - 30-year guarantee"){
            document.getElementById("low-price").innerHTML="$"+(low_price/2.5).toFixed(2);

            low_price = (low_price/2.5).toFixed(2);
        }

        document.getElementById("get-started").classList.remove("active-div");
        document.getElementById("get-started").classList.add("inactive-div");

        progress.style.width = '50%';
    }else if(document.getElementById("financing-partners").classList.contains("active-div")){
        document.getElementById("get-started").classList.add("active-div");
        document.getElementById("get-started").classList.remove("inactive-div");

        document.getElementById("financing-partners").classList.remove("active-div");
        document.getElementById("financing-partners").classList.add("inactive-div");

        progress.style.width = '60%';
    }else if(document.getElementById("choose-a-day").classList.contains("active-div")){
        document.getElementById("financing-partners").classList.add("active-div");
        document.getElementById("financing-partners").classList.remove("inactive-div");

        document.getElementById("choose-a-day").classList.remove("active-div");
        document.getElementById("choose-a-day").classList.add("inactive-div");

        progress.style.width = '70%';
    }
});

// ************************************************************************ select time and submit

const inspection_time_options = document.querySelectorAll(".inspection_time_options");

for(let i=0; i<inspection_time_options.length; i++){
    inspection_time_options[i].addEventListener("click", function(){
        document.getElementById("inspection_time").value = inspection_time_options[i].innerHTML;
        document.getElementById("roofing_form").submit();
    });
};



//    ************************************************************************ Dynamic dates
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d = new Date();


for (let i = 0; i < 7; i++) {
    var day=d.getDay()+i
    if (day> 6){
        day -= 7
    }

    let day_name = weekday[day];
    var dd = d.getDate()+i;
    if(day_name != "Sun" && day_name != "Sat" && i != 0){
        $('#dates').append('<div class="multiselection-div-option" id="appointment_date_options" data-toggle="modal" data-target="#myModal"><img src="./static/images/option.jpeg" id="" alt="no image" class="img-option"><p id="date-n-day">'+day_name+':'+dd+'</p></div>')
    }
}

const appointment_date_options = document.querySelectorAll("#appointment_date_options");
const date_n_day = document.querySelectorAll("#date-n-day");
for(let i=0; i<appointment_date_options.length; i++){
    appointment_date_options[i].addEventListener("click", function(){
        document.getElementById("appointment_date").value = date_n_day[i].innerHTML;
    });
}

    // *********************************************************************** End
