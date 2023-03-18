let Namesearch = document.getElementById("Namesearch")
let FLSearch = document.getElementById("FLSearch")
let NameBox = ''
let searchDiv = document.getElementById("searchDiv")
let Home = document.getElementById("Home")
let homemeals = document.getElementById("homemeals")
let meal=""
let catBox = ""
let category = document.getElementById("category")
let Areameal = document.getElementById("Areameal")
let areabox = ""
let ingbox = ""
let ingrediant = document.getElementById("ingrediant")

// start loading section
function load() {
    $(document).ready(function () {
        $("#loading i").fadeOut(500)
    })
    $("#loading").fadeOut(700, function () {
        $("body").css("overflow", "auto")
    })
}

// End Loding section
// start Nav section

let navLinks = $("#navlinks").innerWidth()
$("#nav-bar").css("left", -navLinks)
$("#navlinks li").hide();
$("#navIcon").attr("class", "fa-solid  fa-2x fa-align-justify")

$("#navIcon").click(function () {
    if ($("#nav-bar").css("left") == '0px') {
        $("#nav-bar").animate({ left: -navLinks }, 700)
        $("#navlinks li").slideUp(1000);
        document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
    } else {
        $("#nav-bar").animate({ left: 0 }, 700)
        $("#navlinks li").slideDown(1000)
        document.getElementById("navIcon").classList.replace("fa-align-justify", "fa-xmark")

    }

})
// End Nav section
// start home section
document.addEventListener("readystatechange", async function () {
    let homemeal = await homeMealss(meal)
  

    //  if (homemeal.meals.length>25) {
    //     homemeal.meals.length=25
    for (let i = 0; i < 10; i++) {
        let imgsearch = homemeal.meals[i].strMealThumb
        let hsearch = homemeal.meals[i].strMeal
        let mealid = homemeal.meals[i].idMeal
        NameBox += `<div class="col-md-6 col-lg-6 col-xl-3 pointer " onclick='(homeMealss("${mealid}"))'>
        <div class="position-relative overflow-hidden img-content ">
            <img src="${imgsearch}" class="img-fluid rounded rounded-3" alt="Meal-image">
            <div class="position-absolute d-flex align-items-center content-hover rounded rounded-3">
                <h2>
                    ${hsearch}
                </h2>
            </div>
        </div>
    
    </div>`

    }

    homemeals.innerHTML = NameBox
    // }

})
async function homeMealss(Nsearch) {

    var homesearch = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Nsearch}`)
    var finalhomeres = await homesearch.json()
    load()
    return finalhomeres
}

async function homedeatails (info){
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fres = api
    let sres = await fres.json()
    let tres =  sres.meals
 
    
    let hmoebox=''
    for (let i = 0; i < tres.length; i++) {
        hmoebox+= `<div class="col-md-4 text-white">
        <img src="${tres[0].strMealThumb}" class="img-fluid rounded-4" alt="">
        <p class="fs-2 fw-medium">${tres[0].strMeal}</p>
    </div>
    <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <p>${tres[0].strInstructions}</p>
        <p class="fs-2">area : <span>${tres[0].strArea}</span></p>
        <p class="fs-2">Category : <span>${tres[0].strCategory}</span></p>
        <p class="fs-2">Recipes :<span class="d-flex">
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure1} of ${tres[0].strIngredient1}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure2} of ${tres[0].strIngredient2}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure3} of ${tres[0].strIngredient3}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure4} of ${tres[0].strIngredient4}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure5} of ${tres[0].strIngredient5}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure6} of ${tres[0].strIngredient6}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure7} of ${tres[0].strIngredient7}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure8} of ${tres[0].strIngredient8}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${tres[0].strMeasure9} of ${tres[0].strIngredient9}</p>
    
            </span></p>
        <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${tres[0].strTags}</span></p>
        <div>
            <button class="btn btn-success">Source</button>
            <a class="btn btn-danger" href="${tres[0].strYoutube}" target="_blank">Youtube</a>
        </div>
    </div>`
        document.getElementById('mainDetailsResponse').innerHTML=hmoebox
    }

}

// End Home section
// start search section

$("#aone").click(function () {

    $("#Home").css("display", "none")
    document.getElementById("Search").classList.replace("d-none", "d-block")
    document.getElementById("Area").classList.replace("d-block", "d-none")
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("Ingredients").classList.replace("d-block", "d-none")
    document.getElementById("ContactUs").classList.replace("d-block", "d-none")
    $("#nav-bar").animate({ left: -navLinks }, 700)
    document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
})


Namesearch.addEventListener("keyup", async function (e) {

    let searchName = await getMealByName(e.target.value)

  
        for (let i = 0; i < searchName.meals.length; i++) {
            let imgsearch = searchName.meals[i].strMealThumb
            let hsearch = searchName.meals[i].strMeal
            NameBox += `<div class="col-md-6 col-lg-6 col-xl-3 pointer ">
        <div class="position-relative overflow-hidden img-content ">
            <img src="${imgsearch}" class="img-fluid rounded rounded-3" alt="Meal-image">
            <div class="position-absolute d-flex align-items-center content-hover rounded rounded-3">
                <h2>
                    ${hsearch}
                </h2>
            </div>
        </div>
    
    </div>`
        }

    searchDiv.innerHTML = NameBox
})


async function getMealByName(Nsearch) {

    var searchres = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Nsearch}`)
    var fianlressearch = await searchres.json()
    load()
    return fianlressearch
}

FLSearch.addEventListener("keyup", async function (e) {
    let searchName = await getMealByletter(e.target.value)
    
    for (let i = 0; i < searchName.meals.length; i++) {
        let imgsearch = searchName.meals[i].strMealThumb
        let hsearch = searchName.meals[i].strMeal
        NameBox += `<div class="col-md-6 col-lg-6 col-xl-3 pointer ">
            <div class="position-relative overflow-hidden img-content ">
                <img src="${imgsearch}" class="img-fluid rounded rounded-3" alt="Meal-image">
                <div class="position-absolute d-flex align-items-center content-hover rounded rounded-3">
                    <h2>
                        ${hsearch}
                    </h2>
                </div>
            </div>
        
        </div>`
    }


    searchDiv.innerHTML = NameBox
})

async function getMealByletter(Lsearch) {
    let searchres = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Lsearch}`)
    let finalresult = await searchres.json()
    return finalresult
}
// End search section

// start category section
$("#atwo").click(function () {

    $("#Home").css("display", "none")
    document.getElementById("Search").classList.replace("d-block", "d-none")
    document.getElementById("Categories").classList.replace("d-none", "d-block")
    document.getElementById("Area").classList.replace("d-block", "d-none")
    document.getElementById("Ingredients").classList.replace("d-block", "d-none")
    document.getElementById("ContactUs").classList.replace("d-block", "d-none")
    $("#nav-bar").animate({ left: -navLinks }, 700)
    document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
})


document.addEventListener("readystatechange", async function () {
    let catmeal = await getmealbyCategories()

    for (let i = 0; i < catmeal.categories.length; i++) {
        let imgcat = catmeal.categories[i].strCategoryThumb
        let hcat = catmeal.categories[i].strCategory
        let pcat = catmeal.categories[i].strCategoryDescription.slice(0, 100)
        catBox += `<div class="col-md-6 col-lg-6 col-xl-3  pointer " onclick="displayCategoryLists('${hcat}')">
        <div class="position-relative  overflow-hidden img-content ">
            <img src="${imgcat}" class="img-fluid rounded rounded-3" alt="Meal-image">
            <div class="position-absolute d-flex flex-column content-hover rounded rounded-3 text-center">
                <h2>
                    ${hcat}
                </h2>
                <p >
              ${pcat}
                </p>
            </div>
        </div>

    </div>`

    }
    category.innerHTML = catBox
})

async function getmealbyCategories() {
    let searchresult = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let catres = await searchresult.json()

    load()
    return catres
}
//     document.addEventListener("readystatechange",async () => {
//             let catgor = await displayCategoryLists(info)
//             let cartona = ''
//             console.log(catgor);
//             for (let i = 0; i < catgor.meals.length; i++) {
//                 cartona += `<div class="col-md-3 pointer">
//             <div class="dish bg- position-relative overflow-hidden rounded-4">
//                 <img src="${catgor.meals[i].strMealThumb}" class="img-fluid rounded-4" alt="">
//                 <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
//                     <h2>${catgor.meals[i].strMeal}</h2>
//                 </div>
//             </div>
//         </div>`
//             }

//             document.getElementById("responseOfListCategory").innerHTML = cartona
//         })
// async function displayCategoryLists(info){
//     let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${info}`)
//     let finalrescat = res.json()
//     console.log(finalrescat);
//     document.getElementById("Categories").classList.replace("d-block", "d-none")
//     document.getElementById("Categoriesfood").classList.replace("d-none", "d-block")

// return finalrescat
// }
async function displayCategoryLists(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("Categoriesfood").classList.replace("d-none", "d-block")
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayDetailsOfCategory("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
        <div class="img-content bg- position-relative overflow-hidden rounded-4">
            <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
            <div class="p-2 content-hover w-100 h-100 position-absolute d-flex align-items-center">
                <h2>${finalResponseCategory[i].strMeal}</h2>
            </div>
        </div>
    </div>`
    }
    document.getElementById("responseOfListCategory").innerHTML = cartona
}

function displayDetailsOfCategory(info) {
    document.getElementById("Categoriesfood").classList.replace("d-block", "d-none")
    document.getElementById("Categoriesfooddetails").classList.replace("d-none", "d-block")

    fetchDisplayDetailsOfCategoryApi(info)
}
async function fetchDisplayDetailsOfCategoryApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals

    let cartona = `<div class="col-md-4 text-white">
    <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
    <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
</div>
<div class="col-md-8 text-white">
    <h2>Instructions</h2>
    <p>${finalResponseCategory[0].strInstructions}</p>
    <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
    <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
    <p class="fs-2">Recipes :<span class="d-flex">
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
            <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>

        </span></p>
    <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
    <div>
        <button class="btn btn-success">Source</button>
        <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
    </div>
</div>`
    document.getElementById("detailsResponse").innerHTML = cartona

}



// End category section
// start Area section
$("#athree").click(function () {

    $("#Home").css("display", "none")
    document.getElementById("Search").classList.replace("d-block", "d-none")
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("Area").classList.replace("d-none", "d-block")
    document.getElementById("Ingredients").classList.replace("d-block", "d-none")
    document.getElementById("ContactUs").classList.replace("d-block", "d-none")
    $("#nav-bar").animate({ left: -navLinks }, 700)
    document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
})
document.addEventListener("readystatechange", async function () {
    let areameals = await getmealbyArea()
    
    for (let i = 0; i < 13; i++) {
        let country = areameals.meals[i].strArea

        areabox += ` <div class="col-md-6 col-lg-6 col-xl-3 pointer" onclick='displayAreaLists("${country}")'>
        <div class="text-white text-center">
            <i class="fa-solid fa-house-laptop fa-4x "></i>
            <h2>${country}</h2>
        
        </div>
        
                </div>`


    }
    Areameal.innerHTML = areabox

})

async function getmealbyArea() {
    let searchresult = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let Areares = await searchresult.json()
    return Areares
}
async function displayAreaLists(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    document.getElementById("Area").classList.replace("d-block", "d-none")
    document.getElementById("foodsInArea").classList.replace("d-none", "d-block")
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayDetailsOfArea("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
            <div class="  position-relative img-content overflow-hidden rounded-4">
                <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
                <div class="p-2 content-hover w-100 h-100 position-absolute d-flex align-items-center">
                    <h2>${finalResponseCategory[i].strMeal}</h2>
                </div>
            </div>
        </div>`
    }
    document.getElementById("areaResponse").innerHTML = cartona
}

function displayDetailsOfArea(info) {
    document.getElementById("foodsInArea").classList.replace("d-block", "d-none")
    document.getElementById("foodDetailsarea").classList.replace("d-none", "d-block")

    DisplayDetailsOfAreaApi(info)
}

async function DisplayDetailsOfAreaApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    // console.log(finalResponseCategory);

    let cartona = `<div class="col-md-4 text-white">
        <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
        <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
    </div>
    <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <p>${finalResponseCategory[0].strInstructions}</p>
        <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
        <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
        <p class="fs-2">Recipes :<span class="d-flex">
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>
    
            </span></p>
        <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
        <div>
            <button class="btn btn-success">Source</button>
            <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
        </div>
    </div>`
    document.getElementById("responseOfAreaDetails").innerHTML = cartona

}
// End Area section
// Start ingrediant section
$("#afour").click(function () {

    $("#Home").css("display", "none")
    document.getElementById("Search").classList.replace("d-block", "d-none")
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("Area").classList.replace("d-block", "d-none")
    document.getElementById("Ingredients").classList.replace("d-none", "d-block")
    document.getElementById("ContactUs").classList.replace("d-block", "d-none")
    $("#nav-bar").animate({ left: -navLinks }, 700)
    document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
})
document.addEventListener("readystatechange", async function () {
    let ingred = await getmealbying()
   
    for (let i = 0; i < 10; i++) {

        let hing = ingred.meals[i].strIngredient
        let ping = ingred.meals[i].strDescription.slice(0, 100)
        ingbox += `<div class="col-md-6 col-lg-6 col-xl-3 pointer" onclick='displayIngredientsLists("${hing}")'>
            <div class="text-white text-center">
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                <h4>
                    ${hing}
                </h4>
                <p>
                    ${ping}
                </p>
            </div>
            
                    </div>`


    }

    ingrediant.innerHTML = ingbox
})

async function getmealbying() {
    let ingresult = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingres = await ingresult.json()
    return ingres
}
async function displayIngredientsLists(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals
    document.getElementById("Ingredients").classList.replace("d-block", "d-none")
    document.getElementById("foodsIngredients").classList.replace("d-none", "d-block")
    let cartona = ``
    for (let i = 0; i < finalResponseCategory.length; i++) {
        cartona += `<div onclick='displayDetailsOfIngredients("${finalResponseCategory[i].idMeal}")' class="col-md-3 pointer">
            <div class="dish bg- position-relative overflow-hidden rounded-4">
                <img src="${finalResponseCategory[i].strMealThumb}" class="img-fluid rounded-4" alt="">
                <div class="p-2 layer w-100 h-100 position-absolute d-flex align-items-center">
                    <h2>${finalResponseCategory[i].strMeal}</h2>
                </div>
            </div>
        </div>`
    }
    document.getElementById("ingredientMealsResponse").innerHTML = cartona
}

function displayDetailsOfIngredients(info) {
    document.getElementById("foodsIngredients").classList.replace("d-block", "d-none")
    document.getElementById("detailsFoodsIngredients").classList.replace("d-none", "d-block")

    fetchDisplayDetailsOfIngredientsApi(info)
}

async function fetchDisplayDetailsOfIngredientsApi(info) {
    let api = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`
    let fristRespons = await fetch(api)
    let finalResponse = await fristRespons.json()
    let finalResponseCategory = finalResponse.meals

    let cartona = `<div class="col-md-4 text-white">
        <img src="${finalResponseCategory[0].strMealThumb}" class="img-fluid rounded-4" alt="">
        <p class="fs-2 fw-medium">${finalResponseCategory[0].strMeal}</p>
    </div>
    <div class="col-md-8 text-white">
        <h2>Instructions</h2>
        <p>${finalResponseCategory[0].strInstructions}</p>
        <p class="fs-2">area : <span>${finalResponseCategory[0].strArea}</span></p>
        <p class="fs-2">Category : <span>${finalResponseCategory[0].strCategory}</span></p>
        <p class="fs-2">Recipes :<span class="d-flex">
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure1} of ${finalResponseCategory[0].strIngredient1}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure2} of ${finalResponseCategory[0].strIngredient2}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure3} of ${finalResponseCategory[0].strIngredient3}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure4} of ${finalResponseCategory[0].strIngredient4}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure5} of ${finalResponseCategory[0].strIngredient5}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure6} of ${finalResponseCategory[0].strIngredient6}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure7} of ${finalResponseCategory[0].strIngredient7}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure8} of ${finalResponseCategory[0].strIngredient8}</p>
                <p class="bg-warning text-dark d-inline-block px-2 py-1 rounded-2">${finalResponseCategory[0].strMeasure9} of ${finalResponseCategory[0].strIngredient9}</p>
    
            </span></p>
        <p class="fs-2">Tages : <span class="text-bg-info fs-6 px-2 py-1 rounded-2">${finalResponseCategory[0].strTags}</span></p>
        <div>
            <button class="btn btn-success">Source</button>
            <a class="btn btn-danger" href="${finalResponseCategory[0].strYoutube}" target="_blank">Youtube</a>
        </div>
    </div>`
    document.getElementById("detailsFoodsInIngredientsResponse").innerHTML = cartona

}

// End ingrediant section
// start contact section
$("#afive").click(function () {

    $("#Home").css("display", "none")
    document.getElementById("Search").classList.replace("d-block", "d-none")
    document.getElementById("Categories").classList.replace("d-block", "d-none")
    document.getElementById("Area").classList.replace("d-block", "d-none")
    document.getElementById("Ingredients").classList.replace("d-block", "d-none")
    document.getElementById("ContactUs").classList.replace("d-none", "d-block")
    $("#nav-bar").animate({ left: -navLinks }, 700)
    document.getElementById("navIcon").classList.replace("fa-xmark", "fa-align-justify")
})
document.addEventListener("keyup" , submitBtn)

let nameInput = document.getElementById("namein")
let nameAlert = document.getElementById("nameAlert")
let  emailInput = document.getElementById("emailin")
let   emailAlert = document.getElementById("emailAlert")
let   phoneInput = document.getElementById("phonein")
let  phoneAlert = document.getElementById("phoneAlert")
let   ageInput = document.getElementById("AGEin")
let   ageAlert = document.getElementById("ageAlert")
let   passwordInput = document.getElementById("Passin")
let  passwordAlert = document.getElementById("passwordAlert")
let  repasswordInput = document.getElementById("repassin")
let  repasswordAlert = document.getElementById("repasswordAlert");

function nameValidation() {
    let nameRegex = /^[a-z\sA-Z]+$/
    if (nameRegex.test(nameInput.value) == true) {
        nameAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        nameAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function emailValidation() {
    let emailRegex = /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+$/
    if (emailRegex.test(emailInput.value) == true) {
        emailAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        emailAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function phoneValidation() {
    let phoneRegex = /^[0-9]{11}$/
    if (phoneRegex.test(phoneInput.value) == true) {
        phoneAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        phoneAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function ageValidation() {
    let ageRegex = /^([1-7][0-9]{1}|80)$/
    if (ageRegex.test(ageInput.value) == true) {
        ageAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        ageAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function passValidation() {
    let passRegex = /^[\w]{8,20}$/
    if (passRegex.test(passwordInput.value) == true) {
        passwordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        passwordAlert.classList.replace("d-none", "d-block")
        return false
    }
}
function reepassValidation() {
    if (repasswordInput.value == passwordInput.value) {
        repasswordAlert.classList.replace("d-block", "d-none")
        return true
    } else {
        repasswordAlert.classList.replace("d-none", "d-block")
        return false
    }
}

function submitBtn() {
    if (nameValidation() == true && emailValidation() == true && phoneValidation() == true && ageValidation() == true &&
        passValidation() == true && reepassValidation() == true) {
        document.getElementById("submitBtn").removeAttribute("disabled"); 
    } else {
        document.getElementById("submitBtn").setAttribute("disabled" , "true"); 

    }
}
