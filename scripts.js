// App
function euCountries() {
  fetch(`https://restcountries.eu/rest/v2/region/europe?fields=name;capital;population;area;region;flag;alpha2Code;languages;subregion;currencies`) // List of European countries
    .then(response => response.json()) // Convert JSON to JS Object

    // Work with parsed API data
    .then(data => {

      data.forEach(country => {
        // Create a card
        const card = document.createElement("div")
        card.setAttribute("class", "card")
        card.classList.add(`${country.subregion.substring(0, 4).toLowerCase()}`) // Set data attibute

        // Create div to contain the flag image
        const flag_container = document.createElement("div")
        flag_container.setAttribute("class", "flag_container")

        // Nest the flag img inside a div
        const flag = document.createElement("img")
        flag.src = country.flag
        flag.setAttribute("id", `${country.alpha2Code}`)
        flag.setAttribute("class", "flag")

        // Text container
        const text_container = document.createElement("div")
        text_container.setAttribute("class", "text_container")

        // Country name
        const country_name = document.createElement("h2")
        country_name.setAttribute("class", "country_name")
        country_name.textContent = country.name

        // Country captial
        const capital = document.createElement("p")
        capital.setAttribute("class", "capital")
        capital.textContent = country.capital

        // Description
        const description = document.createElement("p")
        description.setAttribute("class", "description")
        description.innerHTML = `${country.name} is located in ${country.subregion}, covering an area of ${country.area}km<sup>2</sup>. The population of ${country.population} speak ${country.languages[0].name} and use ${country.currencies.length} currencies. The main currency is the ${country.currencies[0].name} (${country.currencies[0].symbol}).`

        // Build site structure
        // Create country card
        flex_container.appendChild(card)
        // Add flag and text_container
        card.appendChild(flag_container)
        card.appendChild(text_container)

        // Flag img is nested
        flag_container.appendChild(flag)
        flag_container.appendChild(country_name)
        flag_container.appendChild(capital)

        // Add copy to text_container
        text_container.appendChild(description)
      })
    })

    // Handle errors
    .catch(error => {
      console.log("error")
    })
}

// DOM MANIPULATION
// Store app section
const app = document.getElementById("root")


// Create flex_container
const flex_container = document.createElement("section")
flex_container.setAttribute("class", "flex_container")
app.appendChild(flex_container)

euCountries()

// Filters
$('.filters_list a').on('click', function() {

  var filter = $(this).attr('data-filter')

  $('.card').hide() // Remove all cards
  $(filter).show() // Only show cards with specific class

  $('.filters_list a').removeClass('selected')
  $(this).addClass('selected')

  return false
})
