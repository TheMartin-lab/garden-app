// Garden Advice Logic

function getAdvice(season, plantType) {
    const seasonalAdvice = {
        "summer": "Water your plants regularly and provide some shade.",
        "winter": "Protect your plants from frost with covers.",
        "spring": "Prune dead branches and add compost to the soil.",
        "autumn": "Clean up fallen leaves and plant bulbs for spring."
    };

    const plantAdvice = {
        "flower": "Use fertiliser to encourage blooms.",
        "vegetable": "Keep an eye out for pests!",
        "herb": "Harvest frequently to encourage growth.",
        "tree": "Ensure deep watering for strong root systems."
    };

    const sAdvice = seasonalAdvice[season] || "No specific advice for this season.";
    const pAdvice = plantAdvice[plantType] || "No specific advice for this plant type.";

    return `${sAdvice}\n${pAdvice}`;
}

function recommendPlants(season) {
    const recommendations = {
        "summer": ["Sunflowers", "Zinnias", "Tomatoes", "Peppers"],
        "winter": ["Pansies", "Kale", "Spinach", "Garlic"],
        "spring": ["Tulips", "Daffodils", "Lettuce", "Peas"],
        "autumn": ["Chrysanthemums", "Asters", "Carrots", "Broccoli"]
    };

    const plants = recommendations[season] || [];
    
    if (plants.length > 0) {
        return plants.join(", ");
    } else {
        return "No specific recommendations available for this season.";
    }
}

// Function called by the button in HTML
function provideAdvice() {
    // 1. Get input values
    const seasonInput = document.getElementById("season").value;
    const plantTypeInput = document.getElementById("plantType").value;

    // 2. Generate content
    const adviceText = getAdvice(seasonInput, plantTypeInput);
    const recommendationText = recommendPlants(seasonInput);

    // 3. Display results
    document.getElementById("adviceOutput").textContent = adviceText;
    document.getElementById("recommendationOutput").textContent = recommendationText;
    
    // Show the results container
    document.getElementById("results").style.display = "block";
}
